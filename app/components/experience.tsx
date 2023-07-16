import React from 'react';
import { ExperienceProps } from './types';

const Experience: React.FC<ExperienceProps> = ({ startDate, endDate, role, company, link, description, tags }) => {
	return (
		<div className="group relative grid w-3/4 grid-cols-8 gap-8 md:gap-4 mb-12 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
			<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 text-right pr-4 col-span-3">{startDate} — {endDate}</header>
			<div className="z-10 col-span-5">
				<h3 className="font-medium leading-snug text-slate-200">
					<div>
						<a className="text-xl text-slate-200 hover:text-purple-500
                focus-visible:text-purple-500 group/link text-base" target="_blank"
							rel="noopener noreferrer" href={link}>{company}</a>
					</div>
					<div>
						<p className="text-sm text-slate-200">{role}</p>
					</div>
				</h3>
				<p className="mt-2 text-sm leading-normal text-slate-500">{description}</p>
				<div className="flex flex-wrap">
					{tags.map((tag, index) => (
						<span key={index} className="text-sm text-white bg-purple-400/20 text-purple-500 px-2 py-1 mr-1 mt-2 rounded-full">
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>



	);
}

export default Experience;
