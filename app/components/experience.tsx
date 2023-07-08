import React from 'react';
import { ExperienceProps } from './types';

const Experience: React.FC<ExperienceProps> = ({startDate, endDate, role, company, description, tags}) => {
	return (
		<div className="border-2 border-gray-300 p-4 rounded-md mb-4">
			<h2 className="text-xl font-bold">{role}</h2>
			<h3 className="text-lg">{company}</h3>
			<p className="text-gray-500">{startDate} - {endDate}</p>
			<p>{description}</p>
			<div className="flex flex-wrap">
				{tags.map((tag, index) => (
					<span key={index} className="text-sm text-white bg-blue-500 px-2 py-1 m-1 rounded">
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}

export default Experience;
