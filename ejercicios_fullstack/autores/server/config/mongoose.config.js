const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/autores_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(" Baby estás conectada a la BS!"))
    .catch((err) => console.log("Ohhhh, something went wrong", err));