import React from 'react';
import {Navbar, Nav, NavbarBrand, NavLink, NavItem, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
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
						<NavbarBrand className="nav-link" href="/#"><strong>Medric Riley</strong></NavbarBrand>
					</div>	
				</div>
				<div className='row lower-row'>
					<div className='col-md-6'>
						<Link className='nav-link' to='/projects'>Projects</Link>
					</div>
					<div className='col-md-6'>
						<Link className='nav-link' to="/contact">Contact</Link>
					</div>
				</div>				
			</Navbar>
			</div>
		)
	}
}

export default NavBar;