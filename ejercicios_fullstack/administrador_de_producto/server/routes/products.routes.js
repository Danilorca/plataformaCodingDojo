const ProductosController = require("../controllers/products.controller")

module.exports = app => {
  app.post("/api/productos/new", ProductosController.agregarProducto)
}