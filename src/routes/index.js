import { router as actualizar } from "./actualizar.routes.js";
import { router as buscar } from "./buscar.routes.js";
import { router as eliminar } from "./eliminar.routes.js";
import { router as crear } from "./crear.routes.js";
import { router as listar } from "./listar.routes.js";

import { router as upload } from "./uploads.routes.js";
import { Router } from "express";
const router = Router();

router.use("/", crear);
router.use("/", eliminar);
router.use("/", actualizar);

router.use("/", listar);
router.use("/", buscar);
router.use("/", upload);

export { router };
