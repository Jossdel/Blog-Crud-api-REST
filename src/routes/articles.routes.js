const express = require("express");
const multer = require("multer");
const ArticleController = require("../controllers/article.controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ruta donde se almacenarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Generar un nombre único para cada archivo
  },
});

const upload = multer({ storage });

const router = express.Router();
router.get("/test", ArticleController.test);
router.post("/crear", ArticleController.crear);
router.get("/articulos", ArticleController.listar);
router.get("/articulo/:id", ArticleController.uno);
router.delete("/articulo/:id", ArticleController.eliminar);
router.put("/articulo/:id", ArticleController.actualizar);
router.post("/subir", upload.single("imagenPerfil"), ArticleController.subir);

module.exports = router;
