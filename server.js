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


app.post('/contact', function (req, res) {

	console.log("POST ROUTE HIT")

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PWORD
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
			// res.json(error);
			console.log("Error: " + error)
		} else {
			console.log("email sent: ", info)
		
		}
	});
});


app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));

});


// Spin up server
app.listen(PORT, ()=> {
	console.log("app listening on port " + PORT)
})