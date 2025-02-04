import { Router } from "express";
import uploadImage from "../middleware/upload.js";
import { subir } from "../controllers/subir.controller.js";
const router = Router();
router.post("/subir", uploadImage.single("imagenPerfil"), subir);

export { router };
