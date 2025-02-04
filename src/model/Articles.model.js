import mongoose from "mongoose";
import validator from "validator";

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El título es obligatorio"],
    validate: {
      validator: (value) => validator.isLength(value, { min: 5 }),
      message: "El título debe tener al menos 5 caracteres",
    },
  },
  content: {
    type: String,
    required: [true, "El contenido es obligatorio"],
    validate: {
      validator: (value) => validator.isLength(value, { min: 6 }),
      message: "El contenido debe tener al menos 6 caracteres",
    },
  },
  date: { type: Date, default: Date.now },

  image: {
    type: String,
    validate: {
      validator: (value) => {
        const validExtensions = ["png", "jpg", "jpeg", "gif"];
        const extension = value.split(".").pop().toLowerCase();
        return validExtensions.includes(extension);
      },
      message:
        "La imagen debe tener una extensión válida (png, jpg, jpeg, gif)",
    },
  },
});

const Article = mongoose.model("Article", ArticleSchema, "articles");
export default Article;
