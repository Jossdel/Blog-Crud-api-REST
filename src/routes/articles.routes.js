const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/article.controller");

router.get("/test", ArticleController.test);
router.post("/crear", ArticleController.crear);
router.get("/articulos", ArticleController.listar);
router.get("/articulo/:id", ArticleController.uno);
router.delete("/articulo/:id", ArticleController.eliminar);
router.put("/articulo/:id", ArticleController.actualizar);
router.post("/subir", ArticleController.subir);

module.exports = router;
