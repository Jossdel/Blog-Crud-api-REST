import multer, { diskStorage } from "multer";

import dotenv from "dotenv";
dotenv.config();

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Carpeta donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname); // Generar un nombre único para cada archivo
  },
});
const uploadImage = multer({ storage });
export default uploadImage;
