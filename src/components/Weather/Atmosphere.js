import React from 'react';

const Atmosphere = props => {
	const { data: atm } = props;
	return (
		<div className="">
			<span> The Atmosphere Pressure will be: </span>
			<span className="font-weight-bold pr-2 pl-1">{atm.pressure} millibar</span>
			<span>with Visibility: </span>
			<span className="font-weight-bold pr-2 pl-1">{atm.visibility}%</span>
			<span>and Humidity : </span>
			<span className="font-weight-bold pr-2 pl-1">{atm.humidity}%</span>
		</div>
	);
};

export default Atmosphere;
