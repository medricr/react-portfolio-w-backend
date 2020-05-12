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
										projectTitle="placeholder title"
										projectSubtitle="placeholder subtitle"
										projectDescription="project description placeholder text this will be much more meaningful im sure"
									/>
								</div>
								<div className="col-md-4">
									<ProjectCard
										projectTitle="placeholder title"
										projectSubtitle="placeholder subtitle"
										projectDescription="project description placeholder text this will be much more meaningful im sure"
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