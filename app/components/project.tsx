import React from 'react';
import { ProjectProps } from './types';

const Project: React.FC<ProjectProps> = ({ name, description, link }) => (
    <div className="project shadow-lg rounded-lg p-4 aspect-w-4 aspect-h-5 flex items-center justify-center">
        <h2 className="font-bold text-xl text-center">{name}</h2>
        {/* <p>{description}</p> */}
        {/* <a href={link} className="text-blue-500 hover:underline">View Project</a> */}
    </div>

);

export default Project;
