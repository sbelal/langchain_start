import { PromptTemplate } from "langchain/prompts";

const template = "What is a good name for a company that makes {product}?";

const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

const promptText = await prompt.format({ product: "boots" });

console.log(promptText);
