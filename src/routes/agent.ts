import {Router} from 'express';

export const agintRouter = Router();

agintRouter.post("/",  (req, res) => {
try {
    res.send("Agent endpoint is working");
// const prompt: string = req.body.prompt;
// const result = await orchestrator(prompt);
// return res.json({ success: true, result });
} catch (err: any) {
console.error(err);
return res.status(500).json({ error: "Orchestration failed", details: String(err) });
}
});