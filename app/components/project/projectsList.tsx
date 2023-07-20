import React from 'react';
import { ProjectProps } from '../utils/types';
import Project from './project';
import { projects } from '../../data/projects';

const ProjectsList: React.FC = () => {
    return (
        <div id="projects" className="flex flex-col items-center">
            {projects.map((project: ProjectProps, index: number) => (
                <div key={index} className="w-1/2 mx-auto my-6">
                    <Project
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        tags={project.tags}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;
