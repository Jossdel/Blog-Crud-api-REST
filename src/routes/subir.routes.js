import { Router } from "express";
import { upload } from "../middleware/upload.js";
import { subir } from "../controllers/subir.controller.js";
const router = Router();
router.post("/subir", upload.single("imagenPerfil"), subir);

export { router };
