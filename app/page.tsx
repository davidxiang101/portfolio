import React from 'react';
import Splash from './components/splash';
import ExperiencesPage from './components/experiencePage';

const Home: React.FC = () => {
	return (
		<>
			<Splash />
			<ExperiencesPage />
		</>
	);
};

export default Home;
