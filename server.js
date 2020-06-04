const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const authCodes = require('./auth.json');
var email = '';
var pword = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV) {
	app.use(express.static("client/build"));
	email = process.env.NODE_ENV;
	pword = process.env.NODE_ENV
} else {
	email = authCodes.EMAIL;
	pword = authCodes.PWORD
}

app.post('/contact', function (req, res) {

	console.log(email, pword)
		
	// Set up transporter using enviroment variables pulled down from heroku
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: email,
			pass: pword
		}
	});

	// Set properties of message to be sent
	const mailOptions = {
		from: req.body.sender_email,
		to: email,
		subject: req.body.email_subject + ": from " + req.body.sender_email,
		text: req.body.email_body
	};

	// Send email, reporting any errors
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log("Error: ", error)
		} else {
			console.log("email sent via server.js: ", info)
		}
	});
	res.json("Email successfully sent")
});

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));

});

// Spin up server
app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})