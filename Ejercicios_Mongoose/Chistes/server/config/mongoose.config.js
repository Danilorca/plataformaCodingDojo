const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_api',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() =>console.log("Estoy conectada a la base de datos"))
  .catch((err)=> console.log("Perrits hay un error al conectarse", err));