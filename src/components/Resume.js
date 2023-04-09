import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
	const googleDriveLink = 'https://gdurl.com/Eso9w';

	return (
		<div
			id="resume"
			className="container mx-auto my-12 bg-primary p-6 text-primary"
		>
			<h2 className="mb-6 text-3xl font-semibold">
				<a
					href={googleDriveLink}
					download="Jarod's Resume.pdf"
					className="hover:animate-bounce hover:text-accent"
					target="_blank"
					rel="noreferrer"
				>
					Resume <FontAwesomeIcon icon={faFileArrowDown} size="xs" />
				</a>
			</h2>

			<section className="mb-8">
				<h3 className="left-4 mb-4 text-2xl font-semibold">Education</h3>
				{/* Add your education items here */}
			</section>

			<section className="mb-8">
				<h3 className="mb-4 text-2xl font-semibold">Experience</h3>
				{/* Add your experience items here */}
			</section>

			<section className="mb-8">
				<h3 className="mb-4 text-2xl font-semibold">Certifications</h3>
				{/* Add your certifications here */}
			</section>

			<section>
				<h3 className="mb-4 text-2xl font-semibold">Skills</h3>
				{/* Add your skills here */}
			</section>
		</div>
	);
};

export default Resume;
