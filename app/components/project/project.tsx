import React, { PropsWithChildren } from 'react';
import { ProjectProps } from '../utils/types';

const Project: React.FC<ProjectProps> = ({ name, description, link }) => (
    <div className="card flex border relative border-violet-500 shadow-lg px-4 py-[30%] justify-center">
        <h2 className="z-10 font-bold text-xl w-1/2 text-center">{name}</h2>
        {/* <p>{description}</p> */}
        {/* <a href={link} className="text-blue-500 hover:underline">View Project</a> */}
    </div>
);


export default Project;
