const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/products.routes')(app);

app.listen(8080, () => {
    console.log("Listening at Port 8000")
})


/*
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));



require('./server/config/mongoose.config');
require('./server/routes/products.routes')(app);


app.listen(port, () => console.log('ME HE CONECTADO AL SERVIDOR')) */
