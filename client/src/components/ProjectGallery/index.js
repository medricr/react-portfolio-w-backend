import React from 'react';

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
										projectTitle="MongoDB Web Scraper"
										projectSubtitle="A web scraping app using mognoose, node.js, and handlebars."
										projectDescription="This simple, single page application uses node.js to gather all articles from a webpage (in this case, Pitfork.com's album review page). The article links, titles, and descriptions are then placed into a mongoose database, which is then used to pull all that information and and put it onto the webpage."
									/>
								</div>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="Inventory Manager"
										projectSubtitle="A Node.js app with works with SQL preform basic inventory management"
										projectDescription="This simple application allows the user to access a mySQL database from three different viewpoints. The customer file allows the user to 'purhcase' items, calculating the total cost of the order and updating the databse to reflect the purchase. The Manager file allows the user to 'restock' items in the database, as well as add new ones. Finally, the Supervisor file allows the user to view net sales of the items in the databse by department."
									/>
								</div>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="placeholder title"
										projectSubtitle="placeholder subtitle"
										projectDescription="project description placeholder text this will be much more meaningful im sure"
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