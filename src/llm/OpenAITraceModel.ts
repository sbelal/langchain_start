import { CallbackManager } from "langchain/callbacks";
import { BaseLLM, OpenAI } from "langchain/llms";
import { LLMResult } from "langchain/schema";


export class OpenAITraceModel extends BaseLLM {

    model: BaseLLM;

    _llmType = () => {
        return this.model._llmType()
    }

    _generate = (prompts: string[], stop?: string[]): Promise<LLMResult> => {
        console.log("----------------->Input: " + prompts[0] + "\n\n<------------------")

        const f = async () => {

            const res = await this.model._generate(prompts, stop)

            const output = res.generations[0][0].text;

            console.log("~~~~~~~~~~~> Output")
            console.log(output)
            console.log("<~~~~~~~~~~~\n\n")
            return res
        }

        return f()
    }


    constructor(
        fields?: {
            openAIApiKey?: string
            temperature?: number
            streaming?: boolean
            callbackManager?: CallbackManager
        }
    ) {
        super(fields ?? {});
        this.model = new OpenAI(
            {
                temperature: fields?.temperature,
                openAIApiKey: fields?.openAIApiKey,
                streaming: fields?.streaming,
                callbackManager: fields?.callbackManager
            });
    }


}


