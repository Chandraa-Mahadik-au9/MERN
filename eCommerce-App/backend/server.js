import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Api is set up.");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(
    `Server successfully running in ${process.env.NODE_ENV} mode on port : ${PORT}.`
      .blue.bold
  );
});
