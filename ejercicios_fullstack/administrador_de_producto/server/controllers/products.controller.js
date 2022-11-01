const Productos= require("../models/products.model");

module.exports.agregarProducto = (req, res) =>{
  Productos.create(req.body)
  .then((nuevoProducto)=>res.json({productos:nuevoProducto}))
  .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}