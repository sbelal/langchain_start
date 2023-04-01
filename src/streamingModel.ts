import { OpenAI } from "langchain";
import { CallbackManager } from "langchain/callbacks";
import { settings } from "settings.js";

const chat = new OpenAI({
    streaming: true,
    openAIApiKey: settings.OpenAIApiKey,
    callbackManager: CallbackManager.fromHandlers({
      async handleLLMNewToken(token: string) {
        console.log(token);
      },
    }),
  });
  
  const response = await chat.call("Write me a song about sparkling water.");
  console.log(response);