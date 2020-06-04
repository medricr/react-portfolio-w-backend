import React from 'react';
import skelly from '../../assets/Skelly.png'

class Bio extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="jumbotron rounded mt-5">
							<h1>About Me</h1>
							<hr/>
							{/* Technical about me secion, skills, interests, etc */}
							<img href="#" src={skelly} alt='placeholder' height='300' width='300' className="rounded float-left mr-3"/>
							<p>
								Welcome! My name is Medric Riley, a Oakland based Web developer currently looking for full time or partial employment in the San Francisco Bay Area. 
							</p>
							<br />
							<p>
								My skills include HTM5, CSS, jQuery, JavaScript, C, C++, Node.js, MySQL, MongDB, and using React.js. I have had experience working both by myself and with teams to build full stack web applications, and have completed courses in algorithm design & implementation, data structures, and assembly language. 
							</p>
							<br />
							<p>
								Navigating to the Projects page via the navbar above will allow you to see some of my completed work, both assigned coursework and personal projects. You can find my Github and Linkedin pages below. Feel free to use the contact form to send me an email. I look forward to hearing from you!
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<i className='fa fa-linkedin-square' />{' '}
						<a href="https://www.linkedin.com/in/medric-riley-a0b35017b/">LinkedIn</a>
					</div>
					<div className="col-sm-6">
						<i className='fa fa-github' />{' '}
						<a href="https://github.com/medricr">GitHub</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Bio;

