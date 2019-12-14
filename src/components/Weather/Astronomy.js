import React from 'react';

const Astrology = props => {
	const { data: astrology } = props;
	return (
		<div className="">
			<span>You can Enjoy Sunrise at: </span>
			<span className="font-weight-bold pr-2 pl-1">{astrology.sunrise} </span>
			<span>and Sunset at: </span>
			<span className="font-weight-bold pr-2 pl-1">{astrology.sunset}</span>
		</div>
	);
};

export default Astrology;
