import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const SideBar: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center sticky top-0 w-3/5 h-screen p-4 overflow-auto">
            <h2 className="mb-4 text-2xl font-display">Contact Information</h2>
            <div className="flex space-x-6">
                <a href="mailto:mwd4wm@virginia.edu">
                    <FaEnvelope className="hover:text-slate-500" size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/david-xiang-4891371a6/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="hover:text-slate-500" size={30}/>
                </a>
                <a href="https://github.com/davidxiang101" target="_blank" rel="noreferrer">
                    <FaGithub className="hover:text-slate-500" size={30}/>
                </a>
            </div>
        </div>
    );
};

export default SideBar;
