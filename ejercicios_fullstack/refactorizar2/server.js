const express = require('express');

const cors = require('cors');
const app = express();

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));
require('./server/routes/products.routes')(app);

app.listen(8080, () => {
    console.log("baby estás conectadas al puerto")
})
