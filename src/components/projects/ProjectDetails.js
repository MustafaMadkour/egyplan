import React from 'react';

export default function ProjectDetails(props) {
	const id = props.match.params.id;
	return (
		<div className='container section project-details'>
			<div className='card z-depth-0'>
				<div className='card-content'>
					<span className='card-title'>Project Title - {id}</span>
					<p>lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom</p>
				</div>
				<div className='card-action grey lighten-4 grey-text'>
					<div>Posted by: Mustafa Madkour</div>
					<div>2nd July, 3am</div>
				</div>
			</div>
		</div>
	);
}
