import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import dbConnection from "./Config/Connection.js";
const app = express();

dotenv.config();
                
app.use(express.json());
app.use(cookieparser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(
  cors({
    credential: true,
    origin: process.env.fronted_URL,
  })
);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
