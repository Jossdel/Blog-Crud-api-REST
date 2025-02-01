import { Router } from "express";
import { eliminar } from "../controllers/elimimar.controller.js";
const router = Router();

router.delete("/articulo/:id", eliminar);
export { router };
