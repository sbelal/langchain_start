import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import { settings } from "settings.js";

dotenv.config();

console.log("Hello World!");
console.log(process.env.OPENAI_API_KEY);

const model = new OpenAI({
  openAIApiKey: settings.OpenAIApiKey,
  temperature: 0.9,
});

const res = await model.call(
  "What would be a good company name a company that makes colorful socks?"
);
console.log(res);
