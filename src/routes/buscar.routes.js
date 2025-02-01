import { Router } from "express";
import { buscarId } from "../controllers/buscar.controller.js";
const router = Router();

router.get("/articulo/:id", buscarId);
export { router };
