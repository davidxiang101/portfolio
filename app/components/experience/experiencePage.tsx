import React from 'react';
import SideBar from '../sidebar';
import ExperiencesList from './experiencesList';
import About from '../about/about';
import ProjectsList from '../project/projectsList';

const ExperiencesPage: React.FC = () => {
    return (
        <div id="main" className="flex bg-gradient-to-b from-zinc-950 to-sky-950 py-20 animate-fade-in">
            <SideBar />
            <div className="w-full overflow-auto">
                <About />
                <ExperiencesList />
                <ProjectsList />
            </div>
        </div>
    );
};

export default ExperiencesPage;
