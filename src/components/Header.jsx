import './Header.css';
import Title from './Title';

const Header = ({ scrollToSection, aboutRef, projectsRef, cvRef }) => {
	const scrollToBottom = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth',
		});
	};

	return (
		<div className='header'>
			<Title />
			<nav className='glitch-nav'>
				<div className='menu btns'>
					<button
						className='btn'
						onClick={() => scrollToSection(aboutRef)}
					>
						ABOUT
					</button>
					<button
						className='btn'
						onClick={() => scrollToSection(projectsRef)}
					>
						PROJECTS
					</button>
					<button
						className='btn'
						onClick={() => scrollToSection(cvRef)}
					>
						CV
					</button>
					<button className='btn' onClick={scrollToBottom}>
						CONTACT
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Header;
