import React from 'react';
import { ProjectProps } from '../components/types';
import Project from './project';
import { projects } from '../data/projects';

const ProjectsList: React.FC = () => {
    return (
        <div id="projects" className="flex flex-wrap justify-center">
            {projects.map((project: ProjectProps, index: number) => (
                <Project
                    key={index}
                    name={project.name}
                    description={project.description}
                    link={project.link}
                    tags={project.tags}
                />
            ))}
        </div>
    );
};

export default ProjectsList;
