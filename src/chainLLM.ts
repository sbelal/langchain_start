import { OpenAI } from "langchain/llms";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { settings } from "settings.js";

const model = new OpenAI({
  temperature: 0.9,
  openAIApiKey: settings.OpenAIApiKey,
});

const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

const chain = new LLMChain({ llm: model, prompt: prompt });

const res = await chain.call({ product: "colorful socks" });
console.log(res);
