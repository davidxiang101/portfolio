import React from 'react';
import Splash from './components/splash/splash';
import ExperiencesPage from './components/experience/experiencePage';
import Footer from './components/footer';

const Home: React.FC = () => {
	return (
		<>
			<Splash />
			<ExperiencesPage />
			<Footer />
		</>
	);
};

export default Home;
