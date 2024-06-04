"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const openai_1 = __importDefault(require("openai"));
const OPEN_AI_KEY = process.env["OPEN_AI_KEY"];
if (!OPEN_AI_KEY)
    throw new Error("OPEN_AI_KEY must be defined");
const openai = new openai_1.default({
    apiKey: OPEN_AI_KEY
});
async function main() {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a sassy assistant who responds to what people say to it in a sassy and sarcastic manner." },
            { role: "user", content: "How do I use this self-checkout machine?" },
        ],
        model: "gpt-3.5-turbo",
    });
    return completion.choices;
}
exports.main = main;
//# sourceMappingURL=openaiClient.js.map