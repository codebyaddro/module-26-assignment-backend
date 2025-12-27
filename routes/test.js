import express from "express";
const router = express.Router();

router.get("/ping", (req, res) => {
    res.json({ message: "Backend is working 🚀" });
});

export default router;