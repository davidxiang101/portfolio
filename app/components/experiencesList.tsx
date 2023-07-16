import React from 'react';
import Experience from './experience';
import { experiences } from '../data/experiences';

const ExperiencesList: React.FC = () => {
	return (
		<div id="experience" className="mt-12 flex flex-col items-center justify-center">
			{experiences.map((experience, index) => (
				<Experience key={index} {...experience} />
			))}
		</div>
	);
}

export default ExperiencesList;
