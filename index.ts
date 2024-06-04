import express from 'express';
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import { main } from 'openaiClient';
import OpenAI from "openai";

dotenv.config();

const PORT = process.env["PORT"] || 4000;


const OPEN_AI_KEY = process.env["OPEN_AI_KEY"];
if (!OPEN_AI_KEY) throw new Error("OPEN_AI_KEY must be defined");


const openai = new OpenAI({
  apiKey: OPEN_AI_KEY
});

export async function sass(question: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a sassy assistant who responds to what people say to it in a sassy, sarcastic and passive-aggressive manner." },
      { role: "user", content: question },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message;
}

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));


// Everything is the fault of the user
app.post('/', async (req, res) => {
  try {
    console.log(req)
    if (!req?.body?.question) {
      throw new Error("Where yo question at?");
    }
    const answer = await sass(req.body.question);
    res.send(answer);
  } catch (e) {
    // todo: type narrow on OpenAI error. Error message should read, "It's not me, it's you."
    res.status(400).send((e as Error).message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});