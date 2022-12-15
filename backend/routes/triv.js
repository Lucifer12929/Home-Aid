import express from "express";

import { getTRIV, createTRIV, updateTRIV, deleteTRIV } from "../controllers/triv.js";

const router = express.Router();

router.get("/", getTRIV);
router.post("/", createTRIV);
router.patch("/:id", updateTRIV);
router.delete("/:id", deleteTRIV);

export default router;
