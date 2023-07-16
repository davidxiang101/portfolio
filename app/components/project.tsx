import React from 'react';
import { ProjectProps } from './types';

const Project: React.FC<ProjectProps> = ({ name, description, link }) => (
    <div className="project">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={link}>View Project</a>
    </div>
);

export default Project;
