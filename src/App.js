import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
	const imageUrl =
		'https://drive.google.com/uc?export=view&id=1u_Phw_PJw0bQ4A03EgeQ2G9WYn5A9o3G';
	const [isImageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = imageUrl;
		img.onload = () => setImageLoaded(true);
	}, [imageUrl]);

	if (!isImageLoaded) {
		return null;
	}

	return (
		<>
			<Sidebar />
			<Header backgroundImage={imageUrl} />
			<Resume />
			<Projects />
			<Footer />
		</>
	);
}
