import React from 'react';
import API from '../../API';

class ContactPage extends React.Component {
	// sender email, message body, message subject will all be sent in API request
	state = {
		sender_email: "",
		email_subject:"",
		email_body: ""		
	}
	// component funcitons go here
	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	}
	// sendEmail function
	sendEmail = () => {
		API.sendEmail({
			sender_email: this.state.sender_email,
			email_subject: this.state.email_subject,
			email_body: this.state.email_body
		}).then(()=> {
			window.location.href='/'
		})
	}

	render(){
		return(
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='jumbotron rounded mt-5'>
							<form>
								{/* Sender return email input */}
								<div className='form-group'>
									<label htmlFor='sender_email'>Email Address</label>
									<input type='email' className='form-control' id='sender_email' name='sender_email' placeholder='Enter your Email Adress' onChange={this.handleInputChange}/>

									{/* <small id='email-help' className='form-text text-muted'>This is the email address which will be used to reply to your message</small> */}
								</div>
								{/* Sender subject email input */}
								<div className='form-group'>
									<label htmlFor='email_subject'>Subject</label>
									<input type='text' className='form-control' id='email_subject' name='email_subject' placeholder='Email Subject' onChange={this.handleInputChange} />

									{/* <small id='subject-help' className='form-text text-muted'>This subject will be placed in the subject field of the email</small> */}
								</div>
								{/* Sender body email input */}
								<div className='form-group'>
									<label htmlFor='email_body'>Body</label>
									<textarea type='text' className='form-control' id='email_body' name='email_body' placeholder='Email Body' rows='5' onChange={this.handleInputChange}/>

									{/* <small id='body-help' className='form-text text-muted'>Please include any information you would like to be sent in the final email</small> */}
								</div>
								{/* onclick take information from form, package it into request, and hit the nodemailer route */}
								<button type='button' className='btn btn-primary' onClick={this.sendEmail}>Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactPage;