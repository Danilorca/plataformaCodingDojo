const ProductosController = require("../controllers/products.controller")

module.exports = app => {
  app.post("/api/productos/new", ProductosController.agregarProducto)
  app.get("/api/productos", ProductosController.leerProductos)
  app.get("/api/productos/:id", ProductosController.leerUnProducto)
  app.put("/api/productos/update/:id", ProductosController.editarUnProducto)
  app.delete("/api/productos/delete/:id", ProductosController.eliminarUnProducto)
}