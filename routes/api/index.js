const path = require('path');
const router = require('express').Router();
const nodemailer = require('nodemailer');

router
.route("/contact")
.post(
	(req,res) => {
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
				console.log("Error: " + error)
			} else {
				// res.json('Email sent: ' + info.response);
				console.log("email sent ho")
				// window.location.hr ef='/'
			}
		});
	}
)

router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


module.exports = router;
