import { Article } from "../model/Articles.model.js";

const actualizar = (req, res) => {
  const id = req.params.id;

  Article.findOneAndUpdate({ _id: id }, req.file.filename, { new: true })
    .then((articulo) => {
      return res.status(200).json({
        message: "Articulo actualizado",
        articulo: articulo,
      });
    })
    .catch((err) => {
      return res.status(404).send({
        status: "error",
        message: "No se han encontrado articulos",
      });
    });
};
export { actualizar };
