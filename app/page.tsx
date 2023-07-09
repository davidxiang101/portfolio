import React from 'react';
import Splash from './components/splash';
import ExperiencesPage from './components/experiencePage';
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
