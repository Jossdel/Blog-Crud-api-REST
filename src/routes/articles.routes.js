const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/article.controller");

router.get("/test", ArticleController.test);
router.get("/curso", ArticleController.curso);
router.post("/crear", ArticleController.crear);

module.exports = router;
