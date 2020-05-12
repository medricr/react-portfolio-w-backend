import React from 'react';

// import {Jumbotron, Container, Row, Col} from 'reactstrap';

import skelly from '../../assets/Skelly.png'


class Bio extends React.Component {

	render() {
		return (
			
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="jumbotron rounded mt-5">
							<h1>About Me</h1>
							<hr/>
							{/* Technical about me secion, skills, interests, etc */}
							<img href="#" src={skelly} alt='placeholder' height='300' width='300' className="rounded float-left mr-3"/>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum blandit sapien, eu vestibulum quam ullamcorper at. Vestibulum vel pharetra massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis erat a efficitur feugiat. Curabitur maximus est tempus justo sollicitudin, ac feugiat neque condimentum. Aenean consequat euismod ipsum, eu tempor nulla.
							</p>
							<br />
							<p>
								Quisque fringilla diam mattis tellus tincidunt posuere. Donec egestas vitae erat id ultricies. Vestibulum semper orci at tempor vestibulum. Quisque augue risus, placerat non dapibus ac, vehicula a libero. Fusce porta, metus quis scelerisque aliquet, nisi diam hendrerit libero, et rhoncus metus lectus sed metus. Cras pulvinar ligula sed dolor tempor aliquet. Fusce convallis vitae eros sit amet fringilla. Curabitur in laoreet dolor, in convallis odio.
							</p>
							<br />
							<p>
								Cras fringilla vestibulum lacus ut tincidunt. Maecenas ac sodales justo. Praesent laoreet placerat dolor quis feugiat. Donec facilisis lorem eu odio mollis iaculis. Etiam lobortis auctor posuere. Cras elementum rhoncus elit ac laoreet. Duis facilisis congue ante eu viverra.
							</p>
							{/* More personality driven aboutme section, interests, hobbies, goals, etc */}
							<hr />
							<img href="#" src={skelly} alt='placeholder' height='300' width='300' className='rounded float-right mr-3' />
							<p>
								Nulla auctor, turpis faucibus ultricies molestie, lectus ex iaculis lorem, non lacinia turpis ipsum id massa. In rhoncus finibus sollicitudin. Aliquam et magna consequat, laoreet dui vitae, faucibus ante. Mauris tincidunt eu sem vel commodo. Nam felis turpis, mollis sit amet dictum et, interdum a massa. Etiam ullamcorper odio id libero lobortis facilisis. Sed velit erat, rhoncus vel mauris a, porttitor congue odio. Phasellus ac laoreet lorem. Ut purus mauris, elementum in lorem et, sagittis malesuada enim.
							</p>
							<br />
							<p>
								Sed dapibus, quam eu interdum posuere, elit nibh accumsan odio, commodo ultricies elit elit sed sem. Vivamus maximus aliquet consectetur. Praesent eget dapibus tellus. Cras vel turpis eu sapien venenatis tincidunt non at nulla. Integer mollis, eros at aliquet iaculis, velit nunc egestas erat, in eleifend erat nisl vel mauris. Aenean sollicitudin est at metus laoreet, at dapibus dolor vehicula. Pellentesque finibus augue a mattis vehicula. Etiam nec nibh eget risus posuere sollicitudin in eget turpis. Integer porttitor mattis pulvinar.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4">
						LINK TO LINKEDIN PROFILE GOES HERE
					</div>
					<div className="col-sm-4">
						LINK TO GITHUB PAGE GOES HERE
					</div>
					<div className="col-sm-4">
						THIRD LINK GOES HERE MAYBE???
					</div>
				</div>
			</div>
		)
	}
}

export default Bio;

