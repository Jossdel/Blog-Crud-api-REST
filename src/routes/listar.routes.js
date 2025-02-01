import { Router } from "express";
import { listar } from "../controllers/listar.controller.js";
const router = Router();

router.get("/articulos", listar);

export { router };
