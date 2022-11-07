const express= require("express");
const app = express();
const cors = require('cors')
const port = 8080;

app.use(cors());

app.use( express.json() );

app.use(express.urlencoded({ extended:true }));

require('./server/config/mongoose.config')

const routes = require("./server/routes/autores.routes")
routes(app)

app.listen( port, () => console.log('Estas conectada al server!!!') );