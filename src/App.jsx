import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
	const [loading, setLoading] = useState(true);

	const content = document.getElementById('content');

	useEffect(() => {
		// Simulate loading delay with setTimeout
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const cvRef = useRef(null);

	const scrollToSection = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className='app'>
			{loading ? (
				<div className='lds-roller'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			) : (
				<>
					<div className='content' id='content'>
						{/* <Title /> */}
						<Header
							scrollToSection={scrollToSection}
							aboutRef={aboutRef}
							projectsRef={projectsRef}
							cvRef={cvRef}
						/>
						<MainContent
							aboutRef={aboutRef}
							projectsRef={projectsRef}
							cvRef={cvRef}
						/>
					</div>
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
