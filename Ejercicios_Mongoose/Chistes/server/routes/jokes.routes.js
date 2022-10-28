const { addJokes, getAllJokes, deleteJokes, updateJokes, findOneJokes } = require("../controllers/jokes.controller")

module.exports = (app) => {
	app.post('/api/jokes/new', addJokes )
	app.get('/api/jokes', getAllJokes)
	app.delete('/api/jokes/delete/:id', deleteJokes)
	app.put('/api/jokes/update/:id', updateJokes)
	app.get('/api/jokes/:id', findOneJokes)
}