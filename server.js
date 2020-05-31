const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV) {
	app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
	var directory;
	if (process.env.NODE_ENV) {
		directory = "build";
	} else {
		directory = "public";
	}

	res.sendFile(path.join(__dirname, `./client/${directory}/index.html`));
	// res.sendFile(path.join(__dirname, `./client/build/index.html`));

});

// This application contains a single post route which handles the packaging and sending of emails from the contact form
app.post('/contact', (req, res)=> {

	console.log("POST ROUTE HIT")

	// Here we set up the transporter that comes with nodemailer, giving our gmail credentials and allowing the package to send emails using the gmail server
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'medric.porfolio@gmail.com',
			pass: 'Augu5td4wn!'
		}
	});

	// Here we establish our mail options, in this case filling the email text and subject with information from our post request
	const mailOptions = {
		from: req.body.sender_email,
		to: 'medric.porfolio@gmail.com',
		subject: req.body.email_subject + ": from " + req.body.sender_email,
		text: req.body.email_body
	};

	// Here we send the actual email, requesting either confirmation of an error or of a successful send
	transporter.sendMail(mailOptions, function (error, info) {
		console.log("sending mail...");
		if (error) {
			// res.json(error);
			console.log("Error: " +  error)
		} else {
			// res.json('Email sent: ' + info.response);
			console.log("email sent ho")
			// window.location.hr ef='/'
		}
	});
});

// Spin up server
app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})