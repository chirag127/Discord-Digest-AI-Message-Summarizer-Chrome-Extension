import { beforeEach, describe, expect, it, vi } from "vitest";
import { storage } from "../../core/storage";
import { getEnabledModels, toggleModel } from "./utils";

// Mock storage
vi.mock("../../core/storage", async () => {
  const actual = await vi.importActual("../../core/storage");
  return {
    ...actual,
    storage: {
      get: vi.fn(),
      set: vi.fn(),
    },
  };
});

describe("Settings Utils", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return only enabled models sorted by order", async () => {
    const mockModels = [
      { id: "1", name: "Model 1", isEnabled: true, order: 2 },
      { id: "2", name: "Model 2", isEnabled: false, order: 1 },
      { id: "3", name: "Model 3", isEnabled: true, order: 1 },
    ];
    // @ts-expect-error - Mocking
    vi.mocked(storage.get).mockResolvedValue(mockModels);

    const result = await getEnabledModels();
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe("3"); // Order 1
    expect(result[1].id).toBe("1"); // Order 2
  });

  it("should toggle model enabled state", async () => {
    const mockModels = [{ id: "1", name: "Model 1", isEnabled: true, order: 1 }];
    // @ts-expect-error - Mocking
    vi.mocked(storage.get).mockResolvedValue(mockModels);

    await toggleModel("1", false);

    expect(storage.set).toHaveBeenCalledWith("models", [
      { id: "1", name: "Model 1", isEnabled: false, order: 1 },
    ]);
  });
});
