import { beforeEach, describe, expect, it, vi } from "vitest";
import { AIEngine } from "./index";
import { storage } from "../storage";
import { getEnabledModels } from "../../features/settings/utils";

// Mock dependencies
vi.mock("../storage");
vi.mock("../../features/settings/utils");

const mockGenerateContentStream = vi.fn();
const mockGetGenerativeModel = vi.fn(() => ({
  generateContentStream: mockGenerateContentStream,
}));

// Fix mock constructor
const MockGoogleGenerativeAI = vi.fn(() => ({
    getGenerativeModel: mockGetGenerativeModel,
}));

vi.mock("@google/genai", () => ({
  GoogleGenerativeAI: MockGoogleGenerativeAI,
}));

describe("AIEngine", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset singleton instance (hacky but necessary for singleton testing without exposing reset)
    // @ts-expect-error - Accessing private static
    AIEngine.instance = null;

    // Setup default mocks
    // @ts-expect-error - Mocking
    vi.mocked(storage.get).mockResolvedValue("fake-api-key");
    // @ts-expect-error - Mocking
    vi.mocked(getEnabledModels).mockResolvedValue([
      { id: "primary", name: "Primary", isEnabled: true, order: 1 },
      { id: "backup", name: "Backup", isEnabled: true, order: 2 },
    ]);
  });

  it("should throw if no API key is found", async () => {
    // @ts-expect-error - Mocking
    vi.mocked(storage.get).mockResolvedValue(null);
    const engine = AIEngine.getInstance();
    await expect(engine.generateSummaryStream("test", () => {})).rejects.toThrow("API Key not found");
  });

  it("should stream content from the first available model", async () => {
    const stream = {
      stream: (async function* () {
        yield { text: () => "Hello " };
        yield { text: () => "World" };
      })(),
    };
    mockGenerateContentStream.mockResolvedValue(stream);

    const engine = AIEngine.getInstance();
    const onChunk = vi.fn();
    const result = await engine.generateSummaryStream("prompt", onChunk);

    expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: "primary" });
    expect(onChunk).toHaveBeenCalledWith("Hello ");
    expect(onChunk).toHaveBeenCalledWith("Hello World");
    expect(result).toBe("Hello World");
  });

  it("should fallback to second model if first fails with 429", async () => {
    // First call fails
    mockGenerateContentStream.mockRejectedValueOnce({ status: 429 });

    // Second call succeeds
    const stream = {
      stream: (async function* () {
        yield { text: () => "Backup success" };
      })(),
    };
    mockGenerateContentStream.mockResolvedValueOnce(stream);

    const engine = AIEngine.getInstance();
    const onChunk = vi.fn();
    const result = await engine.generateSummaryStream("prompt", onChunk);

    expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: "primary" });
    expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: "backup" });
    expect(result).toBe("Backup success");
  });

  it("should skip cooled-off models", async () => {
    // First run: Fail primary to trigger cool-off
    mockGenerateContentStream.mockRejectedValueOnce({ status: 429 });
    const stream = {
        stream: (async function* () { yield { text: () => "Backup" }; })(),
    };
    mockGenerateContentStream.mockResolvedValueOnce(stream);

    const engine = AIEngine.getInstance();
    await engine.generateSummaryStream("prompt", () => {}); // Triggers failure on primary

    // Second run immediately after
    mockGenerateContentStream.mockClear();
    mockGetGenerativeModel.mockClear();
    mockGenerateContentStream.mockResolvedValue({
        stream: (async function* () { yield { text: () => "Backup Again" }; })(),
    });

    await engine.generateSummaryStream("prompt", () => {});

    // Should NOT have called primary again
    expect(mockGetGenerativeModel).not.toHaveBeenCalledWith({ model: "primary" });
    expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: "backup" });
  });
});
