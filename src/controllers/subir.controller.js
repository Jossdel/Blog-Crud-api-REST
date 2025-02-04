import Article from "../model/Articles.model.js";

const subir = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json({
        message: "PETICION SIN ARCHIVO",
      });
    }
    const id = req.params.id;
    const { filename } = req.file;
    const parametros = req.body;

    const articulo = await Article.findOneAndUpdate(
      { _id: id },
      { image: filename },
      { new: true }
    );

    return res.status(200).json({
      message: "Articulo actualizado",
      articulo: articulo,
      parametros,
      fichero: req.file,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en la petición",
      error: error,
    });
  }
};
export { subir };
