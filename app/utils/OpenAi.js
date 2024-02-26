import OpenAI, { openAI } from "openai";
import * as dotenv from "dotenv";


const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY,
});


// retrieve assistante


const retrieveAssistant = async ({assistantId}) => {
  const assistant = await openai.beta.assistants.retrieve(
    //pendiente cambiar a assistantID
    "asst_ofiS58VKhhkakr4NSuiEgG0r"
  )

  return assistant;

};



