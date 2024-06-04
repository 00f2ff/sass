import OpenAI from "openai";

const OPEN_AI_KEY = process.env["OPEN_AI_KEY"];
if (!OPEN_AI_KEY) throw new Error("OPEN_AI_KEY must be defined");


const openai = new OpenAI({
  apiKey: OPEN_AI_KEY
});

export async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a sassy assistant who responds to what people say to it in a sassy and sarcastic manner." },
      { role: "user", content: "How do I use this self-checkout machine?" },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices;
}

// main();