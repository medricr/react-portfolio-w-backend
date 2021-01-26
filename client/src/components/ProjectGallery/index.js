import React from 'react';
// IMAGES
import keyboard from '../../assets/keyboard.jpg'; //Photo by Caspar Camille Rubin on Unsplash
import note from '../../assets/stickynote.jpg'; //Photo by Paper Textures on Unsplash
import speaker from '../../assets/speaker.jpg'; //Photo by Josh Sorenson on Unsplash
import dice from '../../assets/dice2.jpg'; //Photo by Riho Kroll on Unsplash
import parchment from '../../assets/parchment.jpg'; //Photo by Mark Rasmuson Unsplash
// COMPONENTS
import ProjectCard from'../ProjectCard';

class ProjectGallery extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="jumbotron rounded mt-5">
						
							<div className='row'>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="MERN Boilerplate"
										projectSubtitle="A set of boilerplate code for a MERN stack, with basic user authentication included."
										projectDescription="This set of code is designed as a jumping off point for a full stack web application, which utilizes a MongoDB database, Express, React, and Node. The project also contains a simple user authentication system using Passport.js, and includes API routes for the creation, update, retrieval, and deletion of simple 'notes', which are tied to the user's profile via collection association in MongoDB."
										projectLink="https://mern-boilerplate-project.herokuapp.com/"
										projectImage={note}
										buttonText="View Project"
									/>
								</div>

								<div className='col-md-4'>
									<ProjectCard
										projectTitle='TTRPG Quest Generator'
										projectSubtitle='A single page application which generates quest hooks for tabletop role playing games.'
										projectDescription="This application pulls different element from a SQL table, and strings them together to create single sentance quest hooks for use to use in tabletop role playing games. Each time the button is clicked, a new quest hook is generated. Future plans to expand the applicaiton include building out additional tables wtih tense specific elements (past, present, and future), and including different genres other than fantasy."
										projectLink="https://whatsmyquest.herokuapp.com/"
										projectImage={parchment}
										buttonText="View Project"
									/>
								</div>

								<div className='col-md-4'>
									<ProjectCard
										projectTitle='Initiative Bag'
										projectSubtitle='A virtual initiative generator and dice roller for "Troika!", a tabletop role playing game.'
										projectDescription='While many tabletop games use an initiative system which has each player and monster going in a defined sequence, Troika! uses a system which relies much more on random chance and luck. Each player is designated tokens with a unique color, which when drawn from a bag, indicates that it is that players turn to act. This application simulates that, as well as uses socket.io to allow multiple players to use the site concurrently, seeing eachothers tokens and using a built in dice roller.'
										projectLink="https://initiative-bag.herokuapp.com/"
										projectImage={dice}
										buttonText="View Project"
									/>
								</div>
							</div>

							<div className='row'>
								<div className='col-md-2'>
									<h1>   </h1>
								</div>
								<div className='col-md-4'>
									<ProjectCard
										projectTitle="LIRI"
										projectSubtitle="An API based application which uses the command line to execute different scripts."
										projectDescription="This simple command line application uses several different APIs; Spotify, Bandsintown, and the OMDB, to return information about movies, songs, or bands that the user enters. Using a set of pre-defined commands, the user can return the top five results from spotify when searching a song, the next five shows that a band is playing, or the top result from the OMDB. In addition, the applicaiton can read a command from a text file and execute that command."
										projectLink="https://github.com/medricr/LIRI_Bot"
										projectImage={speaker}
										buttonText="View on Github"
									/>
								</div>

								<div className="col-md-4">
									<ProjectCard
										projectTitle="Inventory Manager"
										projectSubtitle="A Node.js app with works with SQL preform create, read, update, and delete funcitons with an example inventory."
										projectDescription="This application allows the user to access a mySQL database from three different viewpoints. The customer file allows the user to 'purhcase' items, calculating the total cost of the order and updating the databse to reflect the purchase. The Manager file allows the user to 'restock' items in the database, as well as add new ones. Finally, the Supervisor file allows the user to view net sales of the items in the databse by department."
										projectLink="https://github.com/medricr/Bamazon"
										projectImage={keyboard}
										buttonText="View on Github"
									/>
								</div>	
								<div classNAme='col-md-2'>
									<h1>   </h1>
								</div>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectGallery;