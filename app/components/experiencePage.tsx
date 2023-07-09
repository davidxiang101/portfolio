import React from 'react';
import SideBar from './sidebar';
import ExperiencesList from './experiencesList';

const ExperiencesPage: React.FC = () => {
    return (
        <div className="flex">
            <SideBar />
            <div className="w-full overflow-auto">
                <ExperiencesList/>
            </div>
        </div>
    );
};

export default ExperiencesPage;
