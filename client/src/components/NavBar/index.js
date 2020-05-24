import React from 'react';
import {Navbar, Nav, NavbarBrand, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
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
			<Navbar color="light" light expand="md" className="navbar-static-top">
				<NavbarBrand className="nav-link" href="/#">Medric Riley</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								More
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>									
										<Link className="nav-link" to='/projects'>Projects</Link>									
								</DropdownItem>
								<DropdownItem>									
										<Link className="nav-link" to='/contact'>Contact</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
				
				
			</Navbar>
			</div>
		)
	}
}

export default NavBar;