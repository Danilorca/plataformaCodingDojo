const ProductosController = require("../controllers/products.controller")

module.exports = app => {
  app.post("/api/productos/new", ProductosController.agregarProducto)
  app.get("/api/productos", ProductosController.mostrarProductos)
  app.get("/api/productos/:id", ProductosController.mostrarOneProducto )
  app.put("/api/productos/update/:id", ProductosController.editar )
  app.delete("/api/productos/delete/:id", ProductosController.delete )
}