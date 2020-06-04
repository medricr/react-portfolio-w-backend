import React from 'react';
// IMAGES
import keyboard from '../../assets/keyboard.jpg'; //Photo by Caspar Camille Rubin on Unsplash
import record from '../../assets/record.jpg'; //Photo by Ivan Dorofeev on Unsplash
import note from '../../assets/stickynote.jpg'; //Photo by Paper Textures on Unsplash
import speaker from '../../assets/speaker.jpg'; //Photo by Josh Sorenson on Unsplash
// COMPONENTS
import ProjectCard from'../ProjectCard';

class ProjectGallery extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="jumbotron rounded mt-5">
							<div className='row' id="projectRow">
								<div className='col-md-2' />
								<div className="col-md-4">
									<ProjectCard 
										projectTitle="MongoDB Web Scraper"
										projectSubtitle="A web scraping app using mognoose, node.js, and handlebars."
										projectDescription="This simple, single page application uses node.js to gather all articles from a webpage (in this case, Pitfork.com's album review page). The article links, titles, and descriptions are then placed into a mongoose database, which is then used to pull all that information and and put it onto the webpage."
										projectLink="https://mongo-web-scraperr.herokuapp.com/"
										projectImage={record}
									/>
								</div>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="MERN Boilerplate"
										projectSubtitle="A set of boilerplate code for a MERN stack, with additional basic features"
										projectDescription="This set of code is designed as a jumping off point for a full stack web application, and serves as a starter for any app which utilizes a MongoDB database, Express, React, and Node. In addition, the project contains a simple user authentication system using Passport.js, and includes API routes for the creation, update, retrieval, and deletion of simple 'notes', which are tied to the user's profile via collection association in MongoDB."
										projectLink="https://mern-boilerplate-project.herokuapp.com/"
										projectImage={note}
									/>
								</div>
								<div className='col-md-2' />
							</div>
							<div className='row'>
								<div className='col-md-2' />
								<div className='col-md-4'>
									<ProjectCard 
										projectTitle="LIRI"
										projectSubtitle="An API based application which uses the command line to execute several differnt commands"
										projectDescription="This simple command line application uses several different APIs; Spotify, Bandsintown, and the OMDB, to return information about movies, songs, or bands that the user enters. Using a set of pre-defined commands, the user can return the top five results from spotify when searching a song, the next five shows that a band is playing, or the top result from the OMDB. In addition, the applicaiton can read a command from a text file and execute that command."
										projectImage={speaker}
									/>
								</div>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="Inventory Manager"
										projectSubtitle="A Node.js app with works with SQL preform basic inventory management"
										projectDescription="This application allows the user to access a mySQL database from three different viewpoints. The customer file allows the user to 'purhcase' items, calculating the total cost of the order and updating the databse to reflect the purchase. The Manager file allows the user to 'restock' items in the database, as well as add new ones. Finally, the Supervisor file allows the user to view net sales of the items in the databse by department."
										projectLink="https://github.com/medricr/Bamazon"
										projectImage={keyboard}
									/>
								</div>	
								<div className='col-md-2' />							
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectGallery;