const express = require("express");
const app = express();

//Aquí se conecta a mongoose para inicializar la base de datos
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

//Hace el llamado a todas las rutas
const AllMyUserRoutes = require("./server/routes/jokes.routes");

AllMyUserRoutes(app);

app.listen(8080, () => console.log("Estas listeilor con el servidor"));
