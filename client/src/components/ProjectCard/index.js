import React from 'react';
import ProjectModal from '../ProjectModal';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const ProjectCard = (props) => {

	const {
		projectImage,
		projectTitle,
		projectSubtitle,
		projectLink,
		projectDescription
	} = props;

	return(
		<Card>
			<CardImg top width="100%" height="40%" src={projectImage} alt="Card Image Cap" />
				<CardBody>
					<CardTitle id="card-title">{projectTitle}</CardTitle>
					<hr />
					<CardSubtitle>{projectSubtitle}</CardSubtitle>
					<hr />
					<ProjectModal 
						modalLink={projectLink}
						modalDescription={projectDescription}
						modalName={projectTitle}
					/>
				</CardBody>
		</Card>
	)
	
}

export default ProjectCard;