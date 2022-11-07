const { addAutores, showAutores, findOneAutor, deteleAutor, updateAutor } = require("../controllers/autores.controllers")

module.exports= (app) =>{
  app.post("/api/autores", addAutores);
  app.get("/api/autores", showAutores);
  app.get("/api/autores/:id", findOneAutor)
  app.delete("/api/autores/:id", deteleAutor)
  app.put("/api/autores/:id", updateAutor)
}