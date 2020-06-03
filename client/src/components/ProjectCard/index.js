import React from 'react';

import ProjectModal from '../ProjectModal';

import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class ProjectCard extends React.Component {
	render() {
		return(
			<Card>
				<CardImg top width="100%" src={this.props.projectImage} alt="Card Image Cap" />
					<CardBody>
						<CardTitle id="card-title">{this.props.projectTitle}</CardTitle>
						<hr />
						<CardSubtitle>{this.props.projectSubtitle}</CardSubtitle>
						{/* <CardText  id='card-text' className='card-text'>{this.props.projectDescription}</CardText> */}
						{/* <Button data-toggle="collapse" data-target='#card-text'>Show More</Button> */}
						{/* <CardLink href={this.props.projectLink}>View Project</CardLink> */}
						<hr />
						<ProjectModal 
							modalLink={this.props.projectLink}
							modalDescription={this.props.projectDescription}
							modalName={this.projectTitle}
						/>
					</CardBody>
			</Card>
		)
	}
}

export default ProjectCard;