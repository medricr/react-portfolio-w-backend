// Import all required packages
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
// Define constant variables
const app = express();
const PORT = process.env.PORT || 3001;
// Set up app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV) {
	app.use(express.static("client/build"));
} 
// The single post route that the app uses. Accepts a email subject, body, and return address packaged into the request
app.post('/contact', function (req, res) {
	// Set up transporter using enviroment variables pulled down from heroku
	const transporter = nodemailer.createTransport({
		// PLUG IN PROCESS VARS
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PWORD
		}
	});
	// Set properties of message to be sent
	const mailOptions = {
		from: req.body.sender_email,
		to: process.env.EMAIL,
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
// Send every request to the react app
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));

});
// Spin up server
app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})