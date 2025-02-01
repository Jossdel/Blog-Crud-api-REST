import { Router } from "express";
import { crear } from "../controllers/crear.controller.js";
import { upload } from "../middleware/upload.js";
const router = Router();
router.post("/crear", upload.single("imagenPerfil"), crear);
export { router };
