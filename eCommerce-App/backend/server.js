const express = require("express");
const products = require("./data/products.js");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Api is set up.");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find(prod => prod._id === req.params.id);
  res.json(product);
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server successfully running on port : ${PORT}.`);
});
