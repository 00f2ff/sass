"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sass = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const openai_1 = __importDefault(require("openai"));
dotenv_1.default.config();
const PORT = process.env["PORT"] || 4000;
const OPEN_AI_KEY = process.env["OPEN_AI_KEY"];
if (!OPEN_AI_KEY)
    throw new Error("OPEN_AI_KEY must be defined");
const openai = new openai_1.default({
    apiKey: OPEN_AI_KEY
});
console.log(openai);
async function sass(question) {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a sassy assistant who responds to what people say to it in a sassy, sarcastic and passive-aggressive manner." },
            { role: "user", content: question },
        ],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message;
}
exports.sass = sass;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.post('/', async (req, res) => {
    try {
        console.log(req);
        if (!req?.body?.question) {
            throw new Error("Where yo question at?");
        }
        const answer = await sass(req.body.question);
        res.send(answer);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map