const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bdadmproductos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(()=>console.log("BABY ESTÁS CONECTADA A LA BD!"))
  .catch((err)=> console.log("sorry, algunas veces no los podemos conectar", err));