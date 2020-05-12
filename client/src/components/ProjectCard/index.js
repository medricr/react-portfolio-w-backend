import React from 'react';
import skellyboi from '../../assets/Skelly.png'


import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class ProjectCard extends React.Component {
	render() {
		return(
			<Card>
				<CardImg top width="100%" src={skellyboi} alt="Card Image Cap" />
					<CardBody>
						<CardTitle>{this.props.projectTitle}</CardTitle>
						<CardSubtitle>{this.props.projectSubtitle}</CardSubtitle>
						<CardText>{this.props.projectDescription}</CardText>
						{/* <Button>Press Me</Button> */}
					</CardBody>
			</Card>
		)
	}
}

export default ProjectCard;