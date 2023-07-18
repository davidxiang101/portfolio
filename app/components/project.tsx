import React, { PropsWithChildren } from 'react';
import { ProjectProps } from './types';

const Project: React.FC<ProjectProps> = ({ name, description, link }) => (
    <div className="flex overflow-hidden relative duration-700 border rounded-xl group md:gap-8 border-zinc-500 shadow-lg px-4 py-24 justify-center">
        <h2 className="font-bold text-xl w-1/2 text-center">{name}</h2>
        {/* <p>{description}</p> */}
        {/* <a href={link} className="text-blue-500 hover:underline">View Project</a> */}
    </div>
);

export default Project;
