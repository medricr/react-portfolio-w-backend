import React from 'react';

// import { Fade } from 'reactstrap';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Bio from './components/Bio';
import ProjectGallery from './components/ProjectGallery';
import ContactPage from './components/ContactPage';
// import logo from './logo.svg';
import './App.scss';


class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<NavBar />
					<Switch>
						<Route exact path='/' component={Bio} />
						<Route exact path='/projects' component={ProjectGallery} />
						<Route exact path='/contact' component={ContactPage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
