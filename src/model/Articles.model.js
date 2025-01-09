const mongoose = require("mongoose");
const validator = require("validator");

const ArticlesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El título es obligatorio"],
    validate: {
      validator: (value) => {
        return (
          !validator.isEmpty(value) && validator.isLength(value, { min: 5 })
        );
      },
      message: "El título es requerido y debe tener al menos 5 caracteres",
    },
  },
  content: {
    type: String,
    required: [true, "El contenido es obligatorio"],
    validate: {
      validator: (value) => {
        return !validator.isEmpty(value);
      },
      message: "El contenido no puede estar vacío",
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    default: "default.png",
  },
});

module.exports = mongoose.model("Article", ArticlesSchema);
