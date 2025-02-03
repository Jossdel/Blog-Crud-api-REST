import Article from "../model/Articles.model.js";
const buscarId = async (req, res) => {
  try {
    const id = req.params.id;

    const saveArticle = await Article.findById(id);

    return res.status(200).json({
      status: "success",
      saveArticle,
    });
  } catch (error) {
    res.status(400).json({
      message: " error al buscar el articulo",
      error,
    });
  }
};
export { buscarId };
