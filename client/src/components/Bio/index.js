import React from 'react';
// import skelly from '../../assets/Skelly.png'
import headshot from '../../assets/headshot_resize.jpg';

const Bio = () => {

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="jumbotron rounded mt-5">
						<h1>About Me</h1>
						<hr/>
						{/* Technical about me secion, skills, interests, etc */}
						<img href="#" src={headshot} alt='placeholder' height='280px' className="rounded float-left mr-3"/>
						<p>
							Welcome. My name is Medric Riley, a Davis based Web developer currently looking for full time or partial employment in Northern California. 
						</p>
						<br />
						<p>
							My skills include HTM5, CSS, jQuery, JavaScript, C, C++, Node.js, MySQL, MongDB, and using React.js. I have had experience working both by myself and with teams to build full stack web applications, and have completed courses in algorithm design & implementation, data structures, and assembly language. In addition to this, I have completed a full-stack web development course from the UC Davis Continuing & Professional Education extension center.
						</p>
						<br />
						<p>
							Personally, I am a fan of puzzle and games, anything that forces me to think outside the box or in new and interesting ways. In addition to this, years of working in the service industry have given me the experience neccesary to work quickly and efficiently under pressure, while maintaing a standard of professionalism required for communicating with clients and customers.
						</p>
						<br />
						<p>
							Navigating to the Projects page via the navbar above will allow you to see some of my completed work, both assigned coursework and personal projects. You can find my Github and Linkedin pages below. In addition to this, feel free to use the contact page to send me an email. I look forward to hearing from you. 
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				
				<div className="col-sm-4 col-lg-4">
					<i className='fa fa-linkedin-square' />{' '}
					<a href="https://www.linkedin.com/in/medric-riley-a0b35017b/">LinkedIn</a>
				</div>
		
				<div className="col-sm-4 col-lg-4">
					<i className='fa fa-github' />{' '}
					<a href="https://github.com/medricr">GitHub</a>
				</div>

				<div className="col-sm-4 col-lg-4">
					<i className="fa fa-file-o" />{' '}
					<a href="http://t.cred.ly/l/584737bb-2595-4cba-98c5-438e1c3431a4">Certificate of Completion</a>
				</div>

			</div>
		</div>
	)
}

export default Bio;

