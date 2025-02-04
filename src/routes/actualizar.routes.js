import { Router } from "express";
import { actualizar } from "../controllers/actualizar.controller.js";
import uploadImage from "../middleware/upload.js";
const router = Router();

router.put("/articulo/:id", uploadImage.single("image"), actualizar);

export { router };
