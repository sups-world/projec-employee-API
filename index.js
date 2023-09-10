import express from "express";
import dotenv from "dotenv";
// import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(cors());

app.get("/", () => {
  console.log("hello router");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
