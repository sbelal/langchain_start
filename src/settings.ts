import * as dotenv from "dotenv";
dotenv.config();

export const settings = {
  OpenAIApiKey: process.env.OPENAI_API_KEY,
  SerpApiKey: process.env.SERP_API_KEY,
};
