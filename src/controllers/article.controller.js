const Article = require("../model/Articles.model.js");
const validator = require("validator");
const test = (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
};

const curso = (req, res) => {
  return res.status(200).json([
    {
      nombre: "Curso de Node.js",
      duracion: "5 horas",
      costo: "Gratis",
    },
    {
      curso: "Curso de React.js",
      duracion: "10 horas",
      costo: "Gratis",
    },
  ]);
};

const crear = (req, res) => {
  const parametros = req.body;

  try {
    const validarTitulo =
      !validator.isEmpty(parametros.title) &&
      validator.isLength(parametros.title, { min: 5, max: undefined });
    const validarContenido = !validator.isEmpty(parametros.content);
    if (!validarTitulo || !validarContenido) {
      throw new Error("No se a validado la informacion");
    }
  } catch (error) {
    return res.status(400).json({
      message: "Faltan campos por llenar",
    });
  }

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
        message: "no se pudo guardar el articulo",
      });
    });
};

module.exports = {
  test,
  curso,
  crear,
};
