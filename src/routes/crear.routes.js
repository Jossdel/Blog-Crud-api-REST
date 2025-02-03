import { Router } from "express";
import { crear } from "../controllers/crear.controller.js";

const router = Router();
router.post("/crear", crear);
export { router };
