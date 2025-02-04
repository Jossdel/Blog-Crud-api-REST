import { Router } from "express";
import { upload } from "../controllers/uploads.controller.js";
import uploadImage from "../middleware/upload.js";
const router = Router();
router.post("/upload", uploadImage.single("image"), upload);
export { router };
