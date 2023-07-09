import React from 'react';
import SideBar from './sidebar';
import ExperiencesList from './experiencesList';

const ExperiencesPage: React.FC = () => {
    return (
        <div className="flex bg-gradient-to-b from-slate-950 to-sky-950 pt-8 animate-fade-in">
            <SideBar />
            <div className="w-full overflow-auto">
                <ExperiencesList/>
            </div>
        </div>
    );
};

export default ExperiencesPage;
