import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectModal = (props) => {

	const {
		modalLink,
		modalDescription,
		modalName
	} = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div id="content-modal">
			<Button onClick={toggle} id="modal-button"> View More </Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{modalName}</ModalHeader>
				<ModalBody>
					{modalDescription}
				</ModalBody>
				<ModalFooter>
					<Button href={modalLink} target="_blank"> View Project </Button>{' '}
					<Button onClick={toggle}> Close </Button>
				</ModalFooter>
			</Modal> 
		</div>
	)
}

export default ProjectModal;