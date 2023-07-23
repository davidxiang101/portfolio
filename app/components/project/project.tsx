import React, { PropsWithChildren } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectProps } from '../utils/types';

const Project: React.FC<ProjectProps> = ({ name, description, link }) => (
    <div className="card flex border relative border-violet-500 shadow-lg px-4 py-[30%] justify-center">
        <h2 className="z-10 font-bold text-xl w-1/2 text-center">{name}</h2>
        <a href={link} className="absolute top-3 right-3 text-slate-400">
            <FaExternalLinkAlt />
        </a>
    </div>
);

export default Project;
