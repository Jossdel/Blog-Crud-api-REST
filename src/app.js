import express from "express";
import cors from "cors";
import { connection } from "../database/connection.js";
import { router } from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
//Conexión a la base de datos
connection();
//Configuración de middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// RUTAS
app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidos corriendo en el puerto ${PORT}`);
});
