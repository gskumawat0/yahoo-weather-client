import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Wind from './Wind';
import Atmosphere from './Atmosphere';
import Astronomy from './Astronomy';

const Observation = props => {
	let { data: observation } = props;
	return (
		<div className=" p-2">
			<h2 className="h5">Today</h2>
			<div>
				<span>The Weather will be : </span>
				<span className="font-weight-bold px-2">{observation.condition.text}</span>
				<span>and Temperature will be:</span>
				<span className="font-weight-bold px-2">
					{observation.condition.temperature}
					<sup>o</sup>C
				</span>
			</div>
			<Wind data={observation.wind} />
			<Atmosphere data={observation.atmosphere} />
			<Astronomy data={observation.astronomy} />
		</div>
	);
};

export default Observation;
