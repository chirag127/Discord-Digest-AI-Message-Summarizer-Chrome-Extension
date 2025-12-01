import { beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_MODELS, defaultStorage, storage } from "./index";

describe("Storage Core", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return default values if storage is empty", async () => {
    // @ts-expect-error - Mocking browser globals
    (browser.storage.sync.get as unknown).mockResolvedValue({});
    const apiKey = await storage.get("apiKey");
    expect(apiKey).toBe(defaultStorage.apiKey);
  });

  it("should return stored value if exists", async () => {
    // @ts-expect-error - Mocking browser globals
    (browser.storage.sync.get as unknown).mockResolvedValue({ apiKey: "test-key" });
    const apiKey = await storage.get("apiKey");
    expect(apiKey).toBe("test-key");
  });

  it("should return stored models correctly", async () => {
    const customModels = [...DEFAULT_MODELS];
    customModels[0].isEnabled = false;
    // @ts-expect-error - Mocking browser globals
    (browser.storage.sync.get as unknown).mockResolvedValue({ models: customModels });
    const models = await storage.get("models");
    expect(models[0].isEnabled).toBe(false);
  });

  it("should set value correctly", async () => {
    await storage.set("apiKey", "new-key");
    expect(browser.storage.sync.set).toHaveBeenCalledWith({ apiKey: "new-key" });
  });

  it("should get all values merging with defaults", async () => {
    // @ts-expect-error - Mocking browser globals
    (browser.storage.sync.get as unknown).mockResolvedValue({ apiKey: "test-key" });
    const all = await storage.getAll();
    expect(all).toEqual({ ...defaultStorage, apiKey: "test-key" });
  });
});
