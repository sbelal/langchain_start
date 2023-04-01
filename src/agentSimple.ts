import { OpenAI } from "langchain";
import { initializeAgentExecutor } from "langchain/agents";
import { SerpAPI, Calculator } from "langchain/tools";
import { OpenAITraceModel } from "llm/OpenAITraceModel.js";
import { settings } from "settings.js";


const model = new OpenAI({ temperature: 0, openAIApiKey: settings.OpenAIApiKey });
const modelTrace = new OpenAITraceModel(model);  
const tools = [new SerpAPI(settings.SerpApiKey), new Calculator()];


const executor = await initializeAgentExecutor(
    tools,
    modelTrace,
    "zero-shot-react-description"
);
console.log("Loaded agent.");

const input =
    "Who is Olivia Wilde's boyfriend?" +
    " What is his current age raised to the 0.23 power?";
console.log(`Executing with input "${input}"...`);

const result = await executor.call({ input });
console.log("")
console.log("")
console.log("")
console.log(`Got output ${result.output}`);