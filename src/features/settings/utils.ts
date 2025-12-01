// src/features/settings/utils.ts
import { type AIModel, storage } from "../../core/storage";

export const getEnabledModels = async (): Promise<AIModel[]> => {
  const models = await storage.get("models");
  return models.filter((m) => m.isEnabled).sort((a, b) => a.order - b.order);
};

export const updateModelOrder = async (newOrder: AIModel[]): Promise<void> => {
  // Ensure the new order is saved
  await storage.set("models", newOrder);
};

export const toggleModel = async (modelId: string, isEnabled: boolean): Promise<void> => {
  const models = await storage.get("models");
  const updated = models.map((m) => (m.id === modelId ? { ...m, isEnabled } : m));
  await storage.set("models", updated);
};
