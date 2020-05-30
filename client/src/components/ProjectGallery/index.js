import React from 'react';

import ProjectCard from'../ProjectCard';

class ProjectGallery extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="jumbotron rounded mt-5">
							<div className='row' id="projectRow">
								<div className="col-md-4">
									<ProjectCard 
										projectTitle="MongoDB Web Scraper"
										projectSubtitle="A web scraping app using mognoose, node.js, and handlebars."
										projectDescription="This simple, single page application uses node.js to gather all articles from a webpage (in this case, Pitfork.com's album review page). The article links, titles, and descriptions are then placed into a mongoose database, which is then used to pull all that information and and put it onto the webpage."
										projectLink="https://mongo-web-scraperr.herokuapp.com/"
									/>
								</div>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="Inventory Manager"
										projectSubtitle="A Node.js app with works with SQL preform basic inventory management"
										projectDescription="This simple application allows the user to access a mySQL database from three different viewpoints. The customer file allows the user to 'purhcase' items, calculating the total cost of the order and updating the databse to reflect the purchase. The Manager file allows the user to 'restock' items in the database, as well as add new ones. Finally, the Supervisor file allows the user to view net sales of the items in the databse by department."
										projectLink="https://github.com/medricr/Bamazon"
									/>
								</div>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="MERN Boilerplate"
										projectSubtitle="A set of boilerplate code for a MERN stack, with additional basic features"
										projectDescription="This set of code is designed as a starting point for a full stack web application, and serves as a starting point for any app which utilizes a MongoDB database, Express, React, and Node. In addition, the project contains a very simply user authentication system using Passport.js, and includes simple routes for the creation, updating, retrieval, and deletion of simple 'notes', which are tied to the user's profile via collection association in MongoDB."
										projectLink="https://mern-boilerplate-project.herokuapp.com/"
									/>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-4'>
									<ProjectCard 
										projectTitle="Mythology Trivia"
										projectSubtitle="An API based trivia game"
										projectDescription="This simple class project uses API calls to generate questoins and there respective answers, allowing the user to have a different set (and order) of questions each time the game is played."
									/>
								</div>
								<div className='col-md-4'>
									<ProjectCard
										projectTitle="Mythology Trivia"
										projectSubtitle="An API based trivia game"
										projectDescription="This simple class project uses API calls to generate questoins and there respective answers, allowing the user to have a different set (and order) of questions each time the game is played."
									/>
								</div>
								<div className='col-md-4'>
									<ProjectCard 
										projectTitle="Mythology Trivia"
										projectSubtitle="An API based trivia game"
										projectDescription="This simple class project uses API calls to generate questoins and there respective answers, allowing the user to have a different set (and order) of questions each time the game is played."
									/>
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