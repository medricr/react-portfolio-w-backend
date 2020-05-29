import React from 'react';
import skellyboi from '../../assets/Skelly.png'

import ProjectModal from '../ProjectModal';

import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, Button} from 'reactstrap';

class ProjectCard extends React.Component {
	render() {
		return(
			<Card>
				<CardImg top width="100%" src={skellyboi} alt="Card Image Cap" />
					<CardBody>
						<CardTitle>{this.props.projectTitle}</CardTitle>
						<CardSubtitle>{this.props.projectSubtitle}</CardSubtitle>
						{/* <CardText  id='card-text' className='card-text'>{this.props.projectDescription}</CardText> */}
						{/* <Button data-toggle="collapse" data-target='#card-text'>Show More</Button> */}
						{/* <CardLink href={this.props.projectLink}>View Project</CardLink> */}
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