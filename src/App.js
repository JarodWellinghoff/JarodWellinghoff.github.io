import React from 'react';
import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<Resume />
			<Projects />
			<Footer />
		</>
	);
}
export default App;
