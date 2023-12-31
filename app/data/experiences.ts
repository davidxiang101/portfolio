import { ExperienceProps } from '../components/utils/types';

export const experiences: ExperienceProps[] = [
	{
		startDate: 'May 2023',
		endDate: 'August 2023',
		role: 'Software Engineering Intern',
		company: 'Epic',
		link: 'https://www.epic.com/',
		description: 'Imagine having to manually process 1.2 million receipts a year for trip reimbursements. Sounds tedious, right? Well, I had the privilege of leading a project that drastically simplified this process. I developed an AI-powered OCR model that took over the job of reading receipts, reducing input time by 43% and cut down on user errors by 67%. On top of that, I got to flex my skills in Vue.js and .NET, crafting a slick front-end interface.',
		tags: ['.NET', 'Vue', 'Azure', 'Typescript', 'Javascript', 'C#', 'SQL']
	},
	{
		startDate: 'May 2022',
		endDate: 'August 2023',
		role: 'Software Engineering Intern',
		company: 'East Point Energy',
		link: 'https://www.eastpointenergy.com/',
		description: 'At East Point Energy, I spearheaded a neat project that automated our old, time-consuming battery prospecting process. This cut the process time in half and virtually eliminated user errors. Plus, I got to design a user-friendly Python platform that automatically fed prospecting data into Salesforce, saving us a solid two hours on each bulk input.',
		tags: ['Python', 'Selenium', 'GIS']
	},
	{
		startDate: 'January 2023',
		endDate: 'Present',
		role: 'Undergraduate Researcher',
		company: 'ORCL Lab',
		link: "https://engineering.virginia.edu/omni-reality-and-cognition-lab",
		description: 'Led development on a research initiative aimed at enhancing pedestrian safety, I was responsible for creating a VR simulator using Unity, which mirrored real-world downtown traffic scenarios. My role involved developing and testing a multitude of bike lane configurations within this virtual reality environment. This project allowed us to utilize the power of simulation technology to explore and propose optimal urban planning solutions, thereby improving overall safety.',
		tags: ['Unity', 'C#', 'VR']
	},
	{
		startDate: 'May 2023',
		endDate: 'Present',
		role: 'Undergraduate Researcher',
		company: 'Cavalier Autonomous Racing',
		link: "https://autonomousracing.dev/",
		description: 'Pioneered new additions to the ROS F1/10 and IAC Racing Simulators, substantially improving simulation fidelity to real- world racing conditions and boosting the effectiveness of our autonomous racecar. Competed in the Indy Autonomous Challenge, achieving the accolade of Fastest American Team',
		tags: ['Unity', 'C#', 'VR']
	},];
