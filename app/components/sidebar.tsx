"use client";

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const SideBar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const checkScroll = () => {
        const aboutElement = document.getElementById('about');
        const projectsElement = document.getElementById('projects');
        const experienceElement = document.getElementById('experience');

        const aboutTop = aboutElement ? aboutElement.getBoundingClientRect().top : 0;
        const projectsTop = projectsElement ? projectsElement.getBoundingClientRect().top : 0;
        const experienceTop = experienceElement ? experienceElement.getBoundingClientRect().top : 0;

        if (aboutTop >= 0) {
            setActiveSection('about');
        } else if (projectsTop >= 0) {
            setActiveSection('projects');
        } else if (experienceTop >= 0) {
            setActiveSection('experience');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center sticky top-0 w-3/5 h-screen p-4 overflow-auto">

            <nav className="mt-4 mb-12">
                <ul className="space-y-2 font-display text-2xl">
                    <li>
                        <a href="#about" className={activeSection === 'about' ? 'text-violet-500' : ''}>About</a>
                    </li>
                    <li>
                        <a href="#projects" className={activeSection === 'projects' ? 'text-violet-500' : ''}>Projects</a>
                    </li>
                    <li>
                        <a href="#experience" className={activeSection === 'experience' ? 'text-violet-500' : ''}>Experience</a>
                    </li>
                </ul>
            </nav>


            <div className="flex space-x-6">
                <a href="mailto:mwd4wm@virginia.edu">
                    <FaEnvelope className="hover:text-violet-500" size={30} />
                </a>
                <a href="https://www.linkedin.com/in/david-xiang-4891371a6/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="hover:text-violet-500" size={30} />
                </a>
                <a href="https://github.com/davidxiang101" target="_blank" rel="noreferrer">
                    <FaGithub className="hover:text-zinc-500" size={30} />
                </a>
            </div>
        </div>
    );
};

export default SideBar;
