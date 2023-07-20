"use client";

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const SideBar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    interface Distances {
        [key: string]: number;
    }

    const getMiddleY = (element: Element | null): number => {
        if (!element) return 0;
        const { top, height } = element.getBoundingClientRect();
        return top + height / 2;
    }

    const checkScroll = () => {
        const aboutElement = document.getElementById('about');
        const projectsElement = document.getElementById('projects');
        const experienceElement = document.getElementById('experience');

        const aboutMiddleY = getMiddleY(aboutElement);
        const projectsMiddleY = getMiddleY(projectsElement);
        const experienceMiddleY = getMiddleY(experienceElement);

        const viewportMiddleY = window.innerHeight / 2;

        // Compute the distance of each section's middle from the middle of the viewport.
        const distances: Distances = {
            'about': Math.abs(viewportMiddleY - aboutMiddleY),
            'projects': Math.abs(viewportMiddleY - projectsMiddleY),
            'experience': Math.abs(viewportMiddleY - experienceMiddleY),
        };

        // Set the active section to the one with the smallest distance.
        const closestSection = Object.keys(distances).reduce((a, b) => distances[a] < distances[b] ? a : b);
        setActiveSection(closestSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        // call the checkScroll function right after adding it as an event listener
        checkScroll();
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);


    return (
        <div className="flex flex-col items-center justify-center sticky top-0 w-3/5 h-screen p-4 overflow-auto">

            <div className="flex-1 flex flex-col justify-center">
                <nav className="self-center">
                    <ul className="space-y-2 font-display text-2xl">
                        <li>
                            <a href="#about" className={activeSection === 'about' ? 'text-violet-500' : ''}>About</a>
                        </li>
                        <li>
                            <a href="#experience" className={activeSection === 'experience' ? 'text-violet-500' : ''}>Experience</a>
                        </li>
                        <li>
                            <a href="#projects" className={activeSection === 'projects' ? 'text-violet-500' : ''}>Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="mt-auto mb-16 self-center">
                <div className="flex space-x-6">
                    <a href="mailto:mwd4wm@virginia.edu">
                        <FaEnvelope className="hover:text-violet-500" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/david-xiang-4891371a6/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="hover:text-violet-500" size={30} />
                    </a>
                    <a href="https://github.com/davidxiang101" target="_blank" rel="noreferrer">
                        <FaGithub className="hover:text-violet-500" size={30} />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SideBar;
