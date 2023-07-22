import React from 'react';
import styles from './about.module.css';

const About: React.FC = () => {
    return (
        <div id="about" className="my-10 p-4 w-4/5 md:w-2/3 mx-auto">
            <p className="text-md text-slate-400 leading-relaxed">
                In 2014, I was utterly obsessed with <span className={`text-violet-500 font-bold ${styles['highlight-minecraft']}`}>Minecraft</span>. But I wasn&apos;t just playing—I was crafting. Crafting <span className={`text-violet-500 font-bold ${styles['highlight-mods']}`}>mods</span>, to be exact. Without even realizing it, I had stumbled into the amazing world of <span className={`text-violet-500 font-bold ${styles['highlight-coding']}`}>coding</span>.
            </p>
            <p className="text-md text-slate-400 leading-relaxed mt-4">
                Fast-forward to the present day, and I&apos;ve been fortunate enough to bring my dreams to life in <span className={`text-violet-500 font-bold ${styles['highlight-vr']}`}>VR</span>. I&apos;ve worked on immersive VR applications that, quite honestly, feel like I&apos;m living out my Minecraft modding dreams on a grand scale.
            </p>
            <p className="text-md text-slate-400 leading-relaxed mt-4">
                I&apos;ve also been exploring the complexities of <span className={`text-violet-500 font-bold ${styles['highlight-ai']}`}>AI</span> and have found it to be as fascinating as it is challenging. I&apos;m equally drawn to <span className={`text-violet-500 font-bold ${styles['highlight-webdev']}`}>web development</span>&apos;s creativity, creating everything from freelance projects to random web games.
            </p>
            <p className="text-md text-slate-400 leading-relaxed mt-4">
                When the screen&apos;s glow gets a bit too bright, you&apos;ll find me in the kitchen, experimenting with new recipes and flavors. If I&apos;m not burning pasta, I&apos;m either out on the soccer field or on my couch, catching the latest <span className={`text-violet-500 font-bold ${styles['highlight-f1']}`}>F1 race</span>.
            </p>
            <p className="text-md text-slate-400 leading-relaxed mt-4">
                So, welcome to my world. It&apos;s a mix of VR, AI, and pasta sauce. I wouldn&apos;t have it any other way.
            </p>
        </div>
    );
};

export default About;
