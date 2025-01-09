const express = require("express");
const cors = require("cors");
const connection = require("../database/connection");
const route_articles = require("./routes/articles.routes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
//Conexión a la base de datos
connection();
//Configuración de middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// RUTAS
app.use("/api", route_articles);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidos corriendo en el puerto ${PORT}`);
});
