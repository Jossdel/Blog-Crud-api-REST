import Article from "../model/Articles.model.js";

const eliminar = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteArticle = await Article.findOneAndDelete({ _id: id });
    if (!deleteArticle) {
      return res.status(404).json({ message: "Artículo no encontrado" });
    }

    return res.status(200).json({
      message: "Articulo eliminado",
      article: deleteArticle,
    });
  } catch (error) {
    res.send({
      message: "error al eliminar el articulo",
      error,
    });
  }
};
export { eliminar };
