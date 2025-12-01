import { describe, expect, it } from "vitest";
import { createPrompt } from "./prompts";

describe("Summarization Logic", () => {
  const sampleMessages = "User1: Hello\nUser2: Hi there";

  it("should create brief prompt correctly", () => {
    const prompt = createPrompt(sampleMessages, { mode: "brief", style: "bullets" });
    expect(prompt).toContain("EXECUTIVE BRIEF");
    expect(prompt).toContain("strict bullet points");
    expect(prompt).toContain(sampleMessages);
  });

  it("should create detailed prompt correctly", () => {
    const prompt = createPrompt(sampleMessages, { mode: "detailed", style: "paragraphs" });
    expect(prompt).toContain("DEEP DIVE");
    expect(prompt).toContain("well-structured paragraphs");
  });

  it("should create key takeaways prompt correctly", () => {
    const prompt = createPrompt(sampleMessages, { mode: "key_takeaways", style: "bullets" });
    expect(prompt).toContain("ACTION ITEMS");
  });
});
