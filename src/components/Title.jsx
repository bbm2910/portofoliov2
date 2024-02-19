import React, { useEffect, useState } from 'react';
import './Title.css';

const Title = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const stickyThreshold = 50;

			if (window.pageYOffset > stickyThreshold) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={
				isSticky ? 'title-container sticky ' : 'title-container title'
			}
		>
			<p>Hello, I'm</p>
			<h1>Bobby Mastacan</h1>
			<p className='job-description'>// junior_web_developer</p>
			<p className='title-description'>// code_Enthusiast</p>
		</div>
	);
};

export default Title;
