import './Footer.css';
import { useEffect, useState } from 'react';
import GithubIcon from '../assets/github-icon.png';
import GmailIcon from '../assets/gmail-icon.png';
import LinkedinIcon from '../assets/linkedin-logo.png';
import WhatsappIcon from '../assets/whatsapp.png';

const Footer = () => {
	const [error, setError] = useState(false);
	const handleClick = () => {
		// Simulating an error when clicking the link
		setError(true);
	};
	useEffect(() => {
		const footer = document.getElementById('scrollingFooter');

		window.addEventListener('scroll', function () {
			const scrollTop = window.scrollY;
			const windowHeight = window.innerHeight;
			const contentHeight = document.querySelector('.app').clientHeight;
			const scrollPosition = contentHeight - scrollTop - windowHeight;

			if (scrollPosition <= 0) {
				footer.style.opacity = 1;
			} else {
				footer.style.opacity = 0;
			}
		});
	}, []);
	const ErrorPage = () => <div>Error Page</div>;

	return (
		<div id='scrollingFooter' className='footer'>
			<h3 className='get-in-contact'>&lt; Get in contact/&gt;</h3>
			<div className='useful-links'>
				<a href='https://github.com/bbm2910' target='_blank'>
					Github
				</a>

				<a href='mailto:b.mastacan@gmail.com' target='_blank'>
					Gmail
				</a>
				<a
					href='https://www.linkedin.com/in/bogdan-mastacan-353b8b183/'
					target='_blank'
				>
					Linkedin
				</a>
				<a href=''>Whatsapp</a>
			</div>
			<p>© 2024 BM. All rights reserved.</p>
		</div>
	);
};

export default Footer;
