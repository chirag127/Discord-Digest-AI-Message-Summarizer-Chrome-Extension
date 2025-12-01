import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { storage } from "../../core/storage";
import { Settings } from "./Settings";

// Mock storage
vi.mock("../../core/storage");

describe("Settings Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // @ts-expect-error - Mocking
    vi.mocked(storage.get).mockImplementation(async (key) => {
      if (key === "apiKey") return "test-key";
      if (key === "models") return [{ id: "1", name: "Model 1", isEnabled: true, order: 1 }];
      return null;
    });
  });

  it("loads initial data from storage", async () => {
    render(<Settings />);

    await waitFor(() => {
      expect(screen.getByDisplayValue("test-key")).toBeTruthy();
      expect(screen.getByText("Model 1")).toBeTruthy();
    });
  });

  it("saves data to storage", async () => {
    render(<Settings />);

    // Wait for load
    await waitFor(() => screen.getByDisplayValue("test-key"));

    const saveBtn = screen.getByText("Save Configuration");
    fireEvent.click(saveBtn);

    await waitFor(() => {
      expect(storage.set).toHaveBeenCalledWith("apiKey", "test-key");
    });
  });
});
