const Article = require("../model/Articles.model.js");
const validator = require("validator");
const test = (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
};

const crear = (req, res) => {
  const parametros = req.body;

  const article = new Article(parametros);
  article
    .save()
    .then((data) => {
      return res.status(201).json({
        message: "Articulo guardado",
        articulo: data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        status: "Error",
        message:
          "Debe tener al menos 5 caracteres o no se puede guardar el articulo",
      });
    });
};

listar = (req, res) => {
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
const uno = (req, res) => {
  const id = req.params.id;

  Article.findById(id)
    .then((articulo) => {
      return res.status(200).json({
        status: "success",
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
const eliminar = (req, res) => {
  const id = req.params.id;
  Article.findOneAndDelete({ _id: id }).then((articulo) => {
    return res
      .status(200)
      .json({
        message: "Articulo eliminado",
        articulo,
      })
      .catch((err) => {
        return res.status(404).send({
          status: "error",
          message: "No se han encontrado articulos",
        });
      });
  });
};

const actualizar = (req, res) => {
  const id = req.params.id;
  const parametros = req.body;

  Article.findOneAndUpdate({ _id: id }, parametros, { new: true })
    .then((articulo) => {
      return res.status(200).json({
        message: "Articulo actualizado",
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
const subir = (req, res) => {};
module.exports = {
  test,

  crear,
  listar,
  uno,
  eliminar,
  actualizar,
  subir,
};
