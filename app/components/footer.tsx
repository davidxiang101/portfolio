import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full text-center p-8 bg-transparent text-sm">
            <p className="w-1/2 text-gray-500 dark:text-gray-300">
                Thanks for checking out my portfolio. This project was designed using
                {" "}
                <Link href="https://www.figma.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Figma
                </Link>
                {" "}
                and coded in
                {" "}
                <Link href="https://code.visualstudio.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Visual Studio Code
                </Link>
                . Built with love, 
                {" "}
                <Link href="https://nextjs.org/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Next.js
                </Link>
                {" "}
                and 
                {" "}
                <Link href="https://tailwindcss.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                </Link>, 
                deployed using 
                {" "}
                <Link href="https://vercel.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Vercel
                </Link>.
            </p>
        </footer>
    );
};

export default Footer;