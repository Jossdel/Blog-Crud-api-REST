import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ruta donde se almacenarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Generar un nombre único para cada archivo
  },
});
const upload = multer({ storage });
export { upload };
