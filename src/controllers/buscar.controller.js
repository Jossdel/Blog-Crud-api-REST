import { Article } from "../model/Articles.model.js";
const buscarId = async (req, res) => {
  try {
    const id = req.params.id;

    const saveArticle = await Article.findById(id);

    return res.status(200).json({
      status: "success",
      saveArticle,
    });
  } catch (error) {
    res.send({
      massage: " error al guardar el articulo",
      error,
    });
  }
};
export { buscarId };
