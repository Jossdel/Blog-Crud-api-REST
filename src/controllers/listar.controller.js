import Article from "../model/Articles.model.js";

const listar = async (req, res) => {
  try {
    const articles = await Article.find({}).sort({ date: -1 }).limit(); //no le puse limite solo es para recordar que se puede poner
    return res.status(200).send({
      message: "Lista de articulos",
      articles: articles.length,
      articles,
    });
  } catch {
    return res.status(404).send({
      status: "error",
      message: "No se han encontrado articulos",
    });
  }
};
export { listar };
