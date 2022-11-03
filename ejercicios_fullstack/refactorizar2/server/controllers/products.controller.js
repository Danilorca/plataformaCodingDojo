const res = require("express/lib/response");
const Productos= require("../models/products.model");

module.exports.agregarProducto=(req,res) =>{
  Productos.create(req.body)
  .then((nuevoProducto)=>res.json({Productos: nuevoProducto}))
  .catch((err)=>res.json({mensaje:"Algo salió mal", error:err}))
}

module.exports.leerProductos = (req, res) => {
  Productos.find()
  .then((readProductos)=>res.json({productos: readProductos}))
  .catch((err)=>res.json({mensaje:"Algo salió mal", error:err}))
}

module.exports.leerUnProducto = (req, res) =>{
  Productos.findOne({_id:req.params.id})
  .then((readProducto)=>res.json({productos:readProducto}))
  .catch((err)=>res.json({mensaje:"Algo salió mal", error:err}))
}

module.exports.editarUnProducto = (req, res) => {
  Productos.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
  .then((editarProducto)=>res.json({productos:editarProducto}))
  .catch((err)=>res.json({mensaje:"Algo salió mal", error:err}))
}

module.exports.eliminarUnProducto = (req, res) =>{
  Productos.deleteOne({id_:req.params.id})
  .then((deleteProducto)=>res.json({productos:deleteProducto}))
  .catch((err)=>res.json({mensaje:"Algo salió mal", error:err}))
}