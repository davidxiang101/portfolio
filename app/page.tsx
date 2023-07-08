import React from 'react';
import Splash from './components/splash';
import ExperiencesList from './components/experiencesList';

const Home: React.FC = () => {
	return (
		<>
			<Splash />
			<ExperiencesList />
		</>
	);
};

export default Home;
