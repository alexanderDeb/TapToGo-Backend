import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ConnectDB } from "./db.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api",userRoutes)

ConnectDB();
app.listen(8000);
console.log("Server is running in the port: ", 8000);
