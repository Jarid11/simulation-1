require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");
const app = express();

const controller = require("./controller");

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.getProducts);
app.post("/api/product", controller.makeProduct);
app.put("api/product/:id", controller.updateProduct);
app.delete("/api/delete/:id", controller.deleteProduct);

app.listen(port, () => {
  console.log(`Port is running on: ${port}`);
});
