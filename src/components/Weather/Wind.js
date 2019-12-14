import React from 'react';

const Wind = props => {
	const { data: wind } = props;
	return (
		<div className="">
			<span> The Chilling effect of wind is: </span>
			<span className="font-weight-bold pr-2 pl-1">{wind.chill}</span>
			<span>with Speed of: </span>
			<span className="font-weight-bold pr-2 pl-1">{wind.speed} Kmph</span>
			<span>in : </span>
			<span className="font-weight-bold pr-2 pl-1">
				{wind.direction}
				<sup>0</sup> from North
			</span>
		</div>
	);
};

export default Wind;
