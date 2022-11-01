const Productos= require("../models/products.model");

module.exports.agregarProducto = (req, res) =>{
  Productos.create(req.body)
  .then((nuevoProducto)=>res.json({productos:nuevoProducto}))
  .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}

module.exports.mostrarProductos = (req, res) => {
  Productos.find()
  .then((readProductos)=>res.json({productos:readProductos}))
  .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}

module.exports.mostrarOneProducto = (req, res) => {
  Productos.findOne({_id:req.params.id})
  .then((readProducto)=>res.json({productos:readProducto}))
  .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}

module.exports.editar = (req, res) => {
  Productos.findOneAndUpdate({_id:req.params.id},req.body, {new:true})
  .then((editarProducto)=>res.json({productos:editarProducto}))
  .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}

module.exports.delete = (req, res) => {
  Productos.deleteOne({_id:req.params.id})
  .then((eliminarProducto)=>res.json({productos:eliminarProducto}))
  .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}