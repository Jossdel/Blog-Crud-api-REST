import { Article } from "../model/Articles.model.js";

const listar = (req, res) => {
  Article.find({})
    .sort({ date: -1 })
    .limit() //no le puse limite solo es para recordar que se puede poner
    .then((articulo) => {
      return res.status(200).json({
        status: "success",

        contador: articulo.length,
        articulo,
      });
    })
    .catch((err) => {
      return res.status(404).send({
        status: "error",
        message: "No se han encontrado articulos",
      });
    });
};
export { listar };
