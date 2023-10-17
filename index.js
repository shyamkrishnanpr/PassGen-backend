import express from "express";
import cors from "cors";
import connectDatabase from "./config/database.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8000"],
  })
);

app.use("/api", userRouter);

const port = 3010;
app.listen(port, () => {
  console.log(
    `The server connection is now established and running on port ${port}`
  );
});
