import { GoogleGenerativeAI } from "@google/genai";
import { getEnabledModels } from "../../features/settings/utils";
import { storage } from "../storage";

interface ModelErrorState {
  failedAt: number;
  errorCount: number;
}

const COOL_OFF_PERIOD_MS = 60 * 1000; // 1 minute cool-off

export class AIEngine {
  private static instance: AIEngine;
  private client: GoogleGenerativeAI | null = null;
  private currentApiKey: string | null = null;
  private modelErrorStates: Map<string, ModelErrorState> = new Map();

  private constructor() {}

  public static getInstance(): AIEngine {
    if (!AIEngine.instance) {
      AIEngine.instance = new AIEngine();
    }
    return AIEngine.instance;
  }

  private async getClient(): Promise<GoogleGenerativeAI> {
    const apiKey = await storage.get("apiKey");
    if (!apiKey) {
      throw new Error("API Key not found. Please configure it in settings.");
    }

    if (!this.client || this.currentApiKey !== apiKey) {
      this.client = new GoogleGenerativeAI(apiKey);
      this.currentApiKey = apiKey;
    }
    return this.client;
  }

  private isModelAvailable(modelId: string): boolean {
    const errorState = this.modelErrorStates.get(modelId);
    if (!errorState) return true;

    const timeSinceFail = Date.now() - errorState.failedAt;
    if (timeSinceFail > COOL_OFF_PERIOD_MS) {
      this.modelErrorStates.delete(modelId); // Reset after cool-off
      return true;
    }

    return false;
  }

  private markModelFailed(modelId: string) {
    const state = this.modelErrorStates.get(modelId) || { failedAt: 0, errorCount: 0 };
    state.failedAt = Date.now();
    state.errorCount += 1;
    this.modelErrorStates.set(modelId, state);
    console.warn(`Model ${modelId} marked failed. Cooling off for ${COOL_OFF_PERIOD_MS}ms.`);
  }

  public async generateSummaryStream(
    prompt: string,
    onChunk: (text: string) => void,
  ): Promise<string> {
    const client = await this.getClient();
    const enabledModels = await getEnabledModels();

    // Filter out cooling-off models
    const availableModels = enabledModels.filter((m) => this.isModelAvailable(m.id));

    if (availableModels.length === 0) {
      throw new Error(
        "All AI models are currently unavailable or cooling off. Please try again later.",
      );
    }

    let lastError: Error | null = null;

    for (const modelConfig of availableModels) {
      try {
        console.log(`Attempting generation with model: ${modelConfig.id}`);
        // @ts-expect-error - SDK types
        const model = client.getGenerativeModel({ model: modelConfig.id });

        const result = await model.generateContentStream(prompt);

        let fullText = "";
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          fullText += chunkText;
          onChunk(fullText);
        }

        return fullText; // Success
      } catch (error: any) {
        console.error(`Model ${modelConfig.id} failed:`, error);

        // Check for 429 or 5xx
        if (error.status === 429 || error.status >= 500 || error.message?.includes("429")) {
          this.markModelFailed(modelConfig.id);
        }

        lastError = error;
        // Continue to next model
      }
    }

    throw lastError || new Error("Failed to generate summary with all available models.");
  }

  public resetClient() {
    this.client = null;
    this.currentApiKey = null;
  }
}
