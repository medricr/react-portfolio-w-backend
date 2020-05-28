import React from 'react';

// import {Jumbotron, Container, Row, Col} from 'reactstrap';

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
								Welcome! My name is Medric Riley, a San Francisco Bay Area based Web developr blablablahblahablhabhlbha
							</p>
							<br />
							<p>
								My skills include HTM5, CSS, jQuery, JavaScript, C, C++, Node.js, MySQL, MongDB, and using React.js. I have had experience working both by myself and with teams to build full stack web applications, and have completed courses in algorithm design & implementation, data structures, and assembly language. 
							</p>
							<br />
							{/* More personality driven aboutme section, interests, hobbies, goals, etc */}
							<hr />
							<img href="#" src={skelly} alt='placeholder' height='300' width='300' className='rounded float-right mr-3' />
							<p>
								When not working on personal projects, or attempting to learn a new skill (you what?)
							</p>
							<br />
							<p>
								Sed dapibus, quam eu interdum posuere, elit nibh accumsan odio, commodo ultricies elit elit sed sem. Vivamus maximus aliquet consectetur. Praesent eget dapibus tellus. Cras vel turpis eu sapien venenatis tincidunt non at nulla. Integer mollis, eros at aliquet iaculis, velit nunc egestas erat, in eleifend erat nisl vel mauris. Aenean sollicitudin est at metus laoreet, at dapibus dolor vehicula. Pellentesque finibus augue a mattis vehicula. Etiam nec nibh eget risus posuere sollicitudin in eget turpis. Integer porttitor mattis pulvinar.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						LINK TO LINKEDIN PROFILE GOES HERE
					</div>
					<div className="col-sm-4">
						LINK TO GITHUB PAGE GOES HERE
					</div>
					<div className="col-sm-4">
						THIRD LINK GOES HERE MAYBE???
					</div>
				</div>
			</div>
		)
	}
}

export default Bio;

