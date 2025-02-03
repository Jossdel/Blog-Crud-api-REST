import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected: mi_Blog🚀");
  } catch (error) {
    console.log("error al conectar a la basse de datos❌");
  }
};

export { connection };
