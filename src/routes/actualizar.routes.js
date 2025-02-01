import { Router } from "express";
import { actualizar } from "../controllers/actualizar.controller.js";
const router = Router();

router.put("/articulo/:id", actualizar);

export { router };
