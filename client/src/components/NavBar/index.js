import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({isOpen: !this.state.isOpen});
	}

	render(){
		return(
			<div>
			<Navbar dark expand="md" className="navbar-static-top">
				<div className='row upper-row'>
					<div className='col-md-12'>
						<NavbarBrand className="nav-link" href="/#"><h1><strong>Medric Riley</strong></h1></NavbarBrand>
					</div>	
				</div>
				<div className='row lower-row'>
					<div className='col-md-6'>
						<Link className='nav-link' id="projects-link" to='/projects'><h4>Projects</h4></Link>
					</div>
					<div className='col-md-6'>
						<Link className='nav-link' id="contact-link" to="/contact"><h4>Contact</h4></Link>
					</div>
				</div>				
			</Navbar>
			</div>
		)
	}
}

export default NavBar;