import Article from "../model/Articles.model.js";

const crear = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = new Article({
      title: title,
      content: content,
    });

    const saveArticle = await article.save();
    res.status(200).send({
      message: "Se ha guardado el articulo",
      saveArticle,
    });
  } catch (error) {
    res.status(500).send({
      message: "error al guardar el articulo",
      error,
    });
    console.log(error);
  }
};
export { crear };
