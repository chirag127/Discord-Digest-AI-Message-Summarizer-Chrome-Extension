// src/core/storage/index.ts

export interface AIModel {
  id: string;
  name: string;
  isEnabled: boolean;
  order: number;
}

export const DEFAULT_MODELS: AIModel[] = [
  { id: "gemini-3-pro-preview", name: "Gemini 3 Pro Preview", isEnabled: true, order: 1 },
  { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", isEnabled: true, order: 2 },
  { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", isEnabled: true, order: 3 },
  {
    id: "gemini-2.5-flash-lite-preview-09-2025",
    name: "Gemini 2.5 Flash Lite",
    isEnabled: true,
    order: 4,
  },
  { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash", isEnabled: true, order: 5 },
  { id: "gemini-2.0-flash-lite", name: "Gemini 2.0 Flash Lite", isEnabled: true, order: 6 },
];

export interface StorageSchema {
  apiKey: string;
  models: AIModel[];
  theme: "light" | "dark" | "system";
  promptStyle: "concise" | "detailed" | "bullet";
}

export const defaultStorage: StorageSchema = {
  apiKey: "",
  models: DEFAULT_MODELS,
  theme: "system",
  promptStyle: "detailed",
};

export const storage = {
  get: async <K extends keyof StorageSchema>(key: K): Promise<StorageSchema[K]> => {
    const result = await browser.storage.sync.get(key);
    // @ts-expect-error - Runtime check
    return (result[key] !== undefined ? result[key] : defaultStorage[key]) as StorageSchema[K];
  },

  set: async <K extends keyof StorageSchema>(key: K, value: StorageSchema[K]): Promise<void> => {
    await browser.storage.sync.set({ [key]: value });
  },

  getAll: async (): Promise<StorageSchema> => {
    const result = await browser.storage.sync.get(null);
    return { ...defaultStorage, ...result } as StorageSchema;
  },
};
