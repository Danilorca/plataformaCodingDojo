const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema({
  titulo: String,
  precio: Number,
  descripcion: String
})

const Productos =  mongoose.model("Productos", ProductosSchema)

module.exports = Productos;