const mongoose = require("mongoose");

const AutoresSchema = new mongoose.Schema(
  {
    name: {
      type:String,
      required: [
        true, "Debe ingresar el nombre de un autor"
      ],
      minlength:[
        3, "El nombre del autor debe tener 3 caracteres como mínimo"
      ],
      maxlength:[
        20, "El nombre del autor es muy largo "
      ]
    },
  });

  const Autores = mongoose.model('Autores', AutoresSchema);

  module.exports = Autores;