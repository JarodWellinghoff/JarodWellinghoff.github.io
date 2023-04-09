import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAnglesLeft,
	faAnglesRight,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button
				className={` fixed top-4 z-50 rounded-r-lg transition-all duration-300 focus:outline-none ${
					isOpen
						? 'left-72 scale-125 bg-secondary p-2 text-primary'
						: 'left-0  bg-secondary p-2 text-primary hover:scale-125'
				}`}
				onClick={toggleSidebar}
			>
				<FontAwesomeIcon icon={isOpen ? faAnglesLeft : faAnglesRight} />
			</button>
			<div
				className={`w-150 fixed left-0 top-0 z-40 h-full transform bg-secondary p-6 text-primary transition-all duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
				}`}
			>
				<div className="flex h-full flex-col">
					<div className="flex-grow">
						<h2 className="mb-4 text-xl font-semibold">Navigation</h2>
						<ul>
							<li className="mb-2 hover:underline">
								<a href="#resume" onClick={toggleSidebar}>
									Resume
								</a>
							</li>
							<li className="mb-2 hover:underline">
								<a href="#projects" onClick={toggleSidebar}>
									Projects
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-4 mt-8 text-xl font-semibold">Contact</h2>
						<img
							src="https://avatars.githubusercontent.com/u/18653460?v=4"
							alt="Jarod Wellinghoff wearing a suit"
							className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
						></img>

						<ul>
							<li className="mb-2">
								<FontAwesomeIcon
									icon={faEnvelope}
									className="text-left"
								></FontAwesomeIcon>
								<a
									href="mailto:jarodwellinghoff@gmail.com"
									className="pl-5 hover:text-accent hover:underline"
								>
									jarodwellinghoff@gmail.com
								</a>
							</li>
							<li className="mb-2">
								<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
								<a
									href="https://www.linkedin.com/in/jwellinghoff/"
									className="pl-5 hover:text-accent hover:underline"
								>
									/jwellinghoff
								</a>
							</li>
							<li className="mb-2">
								<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
								<a
									href="https://github.com/JarodWellinghoff"
									className="pl-5 hover:text-accent hover:underline"
								>
									/JarodWellinghoff
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="fixed left-0 top-0 z-30 h-full w-full bg-[rgba(0,0,0,0.4)] backdrop-blur-md"
					onClick={toggleSidebar}
				></div>
			)}
		</>
	);
};

export default Sidebar;
