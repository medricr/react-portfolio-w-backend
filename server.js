const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/contact', (req, res)=> {

	console.log(req.body)


	const transporter = nodemailer.createTransport({
		// host: 'smtp.gmail.com',
		// port: 587,
		// secure: false,
		// requireTLS: true,
		service: 'gmail',
		auth: {
			user: 'medric.porfolio@gmail.com',
			pass: 'password'
		}

	});

	const mailOptions = {
		from: req.body.sender_email,
		to: 'medric.porfolio@gmail.com',
		subject: req.body.email_subject + ": from " + req.body.sender_email,
		text: req.body.email_body
	};

	transporter.sendMail(mailOptions, function (error, info) {
		console.log("sending mail...");
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
});


app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})