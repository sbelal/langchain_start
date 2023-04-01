import { OpenAI } from "langchain/llms";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { settings } from "settings.js";

const model = new OpenAI({openAIApiKey: settings.OpenAIApiKey});
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });
const res1 = await chain.call({ input: "Hi! I'm Saluddin Belal" });
console.log(res1);
console.log("----------------------------");
const res2 = await chain.call({ input: "What's my name" });
console.log(res2);