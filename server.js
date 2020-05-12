const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})