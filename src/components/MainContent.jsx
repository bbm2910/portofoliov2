import './MainContent.css';
import CvComponent from './CvComponent';
import Project from './Project';
import Description from './Description';

const MainContent = ({ aboutRef, projectsRef, cvRef }) => {
	return (
		<div className='main-content'>
			<Description reference={aboutRef} />
			<Project reference={projectsRef} />
			<CvComponent reference={cvRef} />
		</div>
	);
};

export default MainContent;
