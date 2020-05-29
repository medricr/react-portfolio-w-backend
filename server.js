const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// This application contains a single post route which handles the packaging and sending of emails from the contact form
app.post('/contact', (req, res)=> {

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
			res.json(error);
		} else {
			res.json('Email sent: ' + info.response);
		}
	});
});

// Spin up server
app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})