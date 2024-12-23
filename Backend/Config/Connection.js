import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const dbUrl = process.env.dataBase_url;

if (!dbUrl) {
  throw new Error("please provide mongoDb url");
}

const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {});

    console.log(" connection Success");
  } catch (error) {
    console.log("MOngodb connection Error: " + error);
    process.exit(1);
  }
};

export default dbConnection;
