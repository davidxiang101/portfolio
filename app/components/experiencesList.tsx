import React from 'react';
import Experience from './experience';
import { experiences } from '../data/experiences';

const ExperiencesList: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-2xl font-display mb-4">Experiences</h1>
			{experiences.map((experience, index) => (
				<Experience key={index} {...experience} />
			))}
		</div>
	);
}

export default ExperiencesList;
