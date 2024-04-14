import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

import express from "express";
import { router } from "./src/routes";

const app = (express.application = express());
const port: number = parseInt(process.env.PORT || "3000");

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
