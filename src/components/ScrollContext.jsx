import React, { createContext, useState, useContext, useEffect } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
	useEffect(() => {
		// Set the refs to their current values only if they are not null
		if (aboutRef.current !== null) setAboutRef(aboutRef.current);
		if (projectsRef.current !== null) setProjectsRef(projectsRef.current);
		if (cvRef.current !== null) setCvRef(cvRef.current);
	}, [aboutRef.current, projectsRef.current, cvRef.current]);


	useEffect(() => {
		// Set the refs to their current values only if they are not null
		if (aboutRef.current !== null) setAboutRef(aboutRef.current);
		if (projectsRef.current !== null) setProjectsRef(projectsRef.current);
		if (cvRef.current !== null) setCvRef(cvRef.current);
	}, [aboutRef.current, projectsRef.current, cvRef.current]);

	return (
		<ScrollContext.Provider
			value={{
				aboutRef,
				setAboutRef,
				projectsRef,
				setProjectsRef,
				cvRef,
				setCvRef,
			}}
		>
			{children}
		</ScrollContext.Provider>
	);
};

export const useScroll = () => useContext(ScrollContext);
