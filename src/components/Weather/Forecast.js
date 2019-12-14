import React from 'react';
import moment from 'moment';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

const Forecast = props => {
	const { data: forecasts } = props;
	return (
		<div>
			<h2 className="h5">Forecasts</h2>
			<Row className="overflow-x">
				{forecasts.map(forecast => (
					<Col md={4} sm={6} className="my-1 " key={forecast.date}>
						<Card>
							<Card.Body>
								<div className="d-flex justify-content-between bg-muted">
									<span>{moment.unix(forecast.date).format('DD MMM, dddd')}</span>
									<span className="text-muted">{forecast.text}</span>
								</div>
								<div>
									<span className="pr-3">
										<FontAwesomeIcon icon={faTemperatureHigh} size="lg" className="text-warning" /> {forecast.high}
										<sup>0</sup>C
									</span>
									<span>
										<FontAwesomeIcon icon={faTemperatureLow} size="lg" className="text-primary" /> {forecast.low}
										<sup>0</sup>C
									</span>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Forecast;
