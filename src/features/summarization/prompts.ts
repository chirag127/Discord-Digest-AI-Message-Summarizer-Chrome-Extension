export type SummaryMode = "brief" | "detailed" | "key_takeaways";
export type SummaryStyle = "bullets" | "paragraphs";

export interface PromptOptions {
  mode: SummaryMode;
  style: SummaryStyle;
}

export const createPrompt = (messages: string, options: PromptOptions): string => {
  const baseInstruction = `You are a world-class executive assistant and technical summarizer. Your goal is to distill the following Discord conversation into a pristine, actionable summary.`;

  let modeInstruction = "";
  switch (options.mode) {
    case "brief":
      modeInstruction = `
### **MODE: EXECUTIVE BRIEF**
- **Goal:** Provide a high-level overview in < 3 sentences.
- **Focus:** The "What" and "Why". Ignore minor details.
- **Output:** A single paragraph or short bullet list.
`;
      break;
    case "detailed":
      modeInstruction = `
### **MODE: DEEP DIVE**
- **Goal:** A comprehensive chronicle of the discussion.
- **Focus:** Context, debate points, decisions, and future implications.
- **Output:** Structured sections with clear headers.
`;
      break;
    case "key_takeaways":
      modeInstruction = `
### **MODE: ACTION ITEMS**
- **Goal:** Extract tasks, decisions, and deadlines.
- **Focus:** "Who", "What", "When".
- **Output:** A strict Markdown Table with columns: **Task**, **Owner**, **Status/Deadline**.
`;
      break;
  }

  const formatInstruction = `
### **FORMATTING RULES**
- **Markdown Only:** Use **bold** for importance, \`code\` for technical terms.
- **No Fluff:** Do not use phrases like "Here is the summary" or "In this chat".
- **Chain of Thought:** Before summarizing, mentally map the conversation flow to ensure temporal accuracy.
- **Style:** ${options.style === "bullets" ? "Use strict bullet points." : "Use well-structured paragraphs."}
`;

  return `${baseInstruction}

${modeInstruction}

${formatInstruction}

### **INPUT CONVERSATION**
${messages}

### **OUTPUT**
`;
};
