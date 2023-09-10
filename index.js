import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes/index.routes.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
