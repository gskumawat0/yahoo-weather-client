import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Temperature = props => {
	const { data: temperature } = props;
	return (
		<div className="p-2">
			<h2>
				<span className="font-weight-bold">Temperature:</span>{' '}
				<span>
					<FontAwesomeIcon icon={faArrowUp} /> {temperature.high}
					<FontAwesomeIcon icon={faArrowDown} /> {temperature.low}
				</span>
			</h2>
		</div>
	);
};

export default Temperature;
