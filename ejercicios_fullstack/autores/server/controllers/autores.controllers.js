const Autores = require('../models/autores.models');

module.exports.addAutores = (req, res) =>{
  Autores.create(req.body)
  .then((newAutor) => res.json({Autor: newAutor}))
  .catch((err)=> res.json({message:"Ohhh nooo, no hemos podido crear un autor", error:err}))
}

module.exports.showAutores = (req, res) =>{
  Autores.find()
  .then((allAutores)=> res.json({Autores: allAutores}))
  .catch((err)=> res.json({message:"Ohhh nooo, no hemos podido encontrar los autores", error:err}))
}

module.exports.findOneAutor = (req, res) =>{
  Autores.findOne({_id:req.params.id})
  .then((findAutor)=> res.json({Autor: findAutor}))
  .catch((err)=> res.json({message:"Ohhh nooo, no hemos podido encontrar a el autor", error:err}))
}

module.exports.deteleAutor = (req, res) =>{
  Autores.deleteOne({_id:req.params.id})
  .then((deleteAutorFound)=>res.json({Eliminar: deleteAutorFound}))
  .catch((err)=> res.json({message:"Ohhh nooo, no hemos podido eliminar a el autor", error:err}))
}

module.exports.updateAutor = (req, res) =>{
  Autores.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators:true, new:true})
  .then((updatedAutor)=> res.json({Update: updatedAutor}))
  .catch((err)=> res.json({message:"Ohhh nooo, no hemos podido modificar a el autor", error:err}))
}