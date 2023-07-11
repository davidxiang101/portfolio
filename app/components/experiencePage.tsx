import React from 'react';
import SideBar from './sidebar';
import ExperiencesList from './experiencesList';
import About from './about';

const ExperiencesPage: React.FC = () => {
    return (
        <div id="main" className="flex bg-gradient-to-b from-slate-950 to-sky-950 py-20 animate-fade-in">
            <SideBar />
            <div className="w-full overflow-auto">
                <About />
                <ExperiencesList/>
            </div>
        </div>
    );
};

export default ExperiencesPage;
