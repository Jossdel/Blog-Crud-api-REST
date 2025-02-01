import { Article } from "../model/Articles.model.js";

const crear = async (req, res) => {
  try {
    const parametros = req.body;
    const article = new Article(parametros);

    const saveArticle = await article.save();
    res.status(200).send({
      message: "success",
      saveArticle,
    });
  } catch (error) {
    res.send({
      massage: " al guardar el articulo",
      error,
    });
  }
};
export { crear };
