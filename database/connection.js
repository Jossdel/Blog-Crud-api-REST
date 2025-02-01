import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("error al conectar a la basse de datos");
  }
};

export { connection };
