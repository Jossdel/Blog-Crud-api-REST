import Article from "../model/Articles.model.js";

const actualizar = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const filename = req.file?.filename;
  console.log("Datos recibidos:", req.body);
  console.log("Archivo recibido:", req.file);

  try {
    const updateData = {};
    // Solo agregamos los campos si fueron enviados en la solicitud
    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (filename) updateData.image = filename;

    const article = await Article.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true }
    );

    if (!article) {
      return res.status(404).json({
        status: "error",
        message: "No se encontró el artículo",
      });
    }

    return res.status(200).json({
      message: "Articulo actualizado",
      articulo: article,
    });
  } catch (error) {
    return res.status(404).send({
      status: "error",
      message: "No se han encontrado articulos",
      error,
    });
  }
};
export { actualizar };
