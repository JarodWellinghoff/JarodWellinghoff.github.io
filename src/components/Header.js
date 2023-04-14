import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export default function Header({ backgroundImage }) {
	const scrollToResume = () => {
		const resumeElement = document.getElementById('resume');
		resumeElement.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div
			id="header"
			className="relative h-screen w-full bg-cover bg-center"
			style={{
				backgroundImage: `url("${backgroundImage}")`,
			}}
		>
			<div className="absolute h-full w-full bg-black bg-opacity-50"></div>
			<div className="container absolute left-1/2 top-1/2 h-auto w-auto -translate-x-1/2 -translate-y-1/2 transform rounded-md border-4 bg-primary bg-opacity-90 p-5 pb-10 pt-10 text-center text-primary transition-all duration-500 hover:scale-125">
				<h1 className="p-4 text-6xl font-bold ">Jarod Wellinghoff</h1>
				<p className="text-xl text-secondary">
					Computer science graduate with problem-solving skills, MERN stack
					expertise, and proficiency in multiple languages, including Python,
					Java, C++, seeks software developer position
				</p>
			</div>
			<button
				onClick={scrollToResume}
				className="bounce absolute bottom-4 left-1/2 h-auto w-16 -translate-x-1/2 transform rounded-full bg-secondary p-2 font-semibold text-primary focus:outline-none"
			>
				<FontAwesomeIcon icon={faAnglesDown} />
			</button>
		</div>
	);
}
