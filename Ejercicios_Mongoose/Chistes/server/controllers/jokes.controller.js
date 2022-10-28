const Jokes = require("../models/jokes.model");

//Crear un chiste
module.exports.addJokes = (req, res) => {
  const { body } = req
  console.log(body)
  Jokes.create(body)
    .then(newJoke => res.json({ newJoke }))
    .catch(err => res.status(500).json({ message: "upsi! no se ha podido crear el chiste", error: err }));
};

//leer todos los chistes
module.exports.getAllJokes = (req, res) =>{
  Jokes.find()
    .then(Joke => res.json({Joke}))
    .catch(err => res.status(500).json({message:"Fallaste encontrando todos los los chistes", error:err}))
};

//Borrar un chiste
module.exports.deleteJokes = (req,res)=>{
  Jokes.deleteOne({_id:req.params.id})
  .then(jokedelete=>res.json({jokedelete}))
  .catch(err => res.status(500).json({message:"Lo siento baby no se puede eliminar el chiste", error:err}))
};

//actualizar un chiste
module.exports.updateJokes = (req,res) =>{
  Jokes.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
  .then(jokeUpDate => res.json({jokeUpDate}))
  .catch(err => res.status(500).json({message:"Lo siento baby actualizar el chiste", error:err}))
};

//Encontrar un chiste
module.exports.findOneJokes = (req, res) =>{
  Jokes.findOne({_id: req.params.id})
  .then((jokesFind)=>res.json({jokesFind}))
  .catch(err => res.status(500).json({message:"Baby no puedo encontrar el chiste", error:err}))
}

