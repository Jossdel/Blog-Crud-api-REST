import { Article } from "../model/Articles.model.js";

const subir = (req, res) => {
  if (!req.file) {
    return res.status(404).json({
      message: "PETICION SIN ARCHIVO",
    });
  }

  const id = req.params.id;
  Article.findOneAndUpdate(
    { _id: id },
    { image: req.file.filename },
    { new: true }
  )
    .then((articulo) => {
      return res.status(200).json({
        message: "Articulo actualizado",
        articulo: articulo,
        fichero: req.file,
      });
    })
    .catch((err) => {
      return res.status(404).send({
        status: "error",
        message: "No se han encontrado articulos",
      });
    });
};
export { subir };
