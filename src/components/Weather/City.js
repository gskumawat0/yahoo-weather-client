import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

const City = props => {
	const { data: city } = props;
	return (
		<div>
			<Row className="p-2">
				<Col sm={6} md={4}>
					<h2 className="h6">
						<FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
						<span className="mx-2 font-weight-light">
							{city.city}, {city.region}, {city.country}
						</span>
					</h2>
				</Col>
				<Col sm={6} md={4}>
					<span className="font-weight-bold px-2">WoeId: </span>
					<span>{city.woeid}</span>
				</Col>
				<Col sm={6} md={4}>
					<span className="font-weight-bold px-2">Lat, Lng: </span>
					<span>
						{city.lat}, {city.long}
					</span>
				</Col>
			</Row>
		</div>
	);
};

export default City;
