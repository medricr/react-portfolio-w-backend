const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/contact', (req,res)=> {
	const stmpTrans = nodemailer.createTransport({
		// set up transporter here
	})
})


app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})