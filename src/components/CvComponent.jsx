import './CvComponent.css';
import ContructionIcon from '../assets/icons8-construction-manager-64.png';
import JsIcon from '../assets/javascript-39422.png';
import ReactIcon from '../assets/react.png';
import RulerIcon from '../assets/icons8-ruler-48.png';
import CameraIcon from '../assets/icons8-documentary-50.png';
import EducationIcon from '../assets/education.png';

const CvComponent = ({ reference }) => {
	return (
		<div ref={reference} className='cv-component'>
			<h2>&lt; Curriculum Vitae/&gt;</h2>
			<div className='cv-section'>
				<p className='cv-date'>2022 - Present</p>
				<div>
					<p className='cv-section-title'>
						Advanced Web Development Studies and Beyond
					</p>
					<img src={JsIcon} alt='js logo' className='js-logo'></img>
					<img
						src={ReactIcon}
						alt='react logo'
						className='react-logo'
					></img>
					<ul>
						<li className='li'>
							Crafted an immersive B2C website for the
							construction industry, leveraging the power of
							content management systems. You can check it out{' '}
							<a href='https://sermanilles.es/' target='_blank'>
								here.
							</a>
						</li>
						<li className='li'>
							Showcased my creative prowess by building a diverse
							range of websites, carefully handcrafting each one
							with the magic of HTML and CSS.
						</li>
						<li className='li'>
							Embarked on an enriching journey of self-improvement
							and skill development with{' '}
							<a
								href='https://www.theodinproject.com/'
								target='_blank'
							>
								The Odin Project,
							</a>{' '}
							an immersive online course.
						</li>
						<li className='li'>
							Took my coding skills to the next level with The
							Odin Project where I not only acquired theoretical
							knowledge but also applied it practically by
							developing interactive games and applications using{' '}
							<span>HTML</span> <span>CSS</span>{' '}
							<span>JavaScript</span> and <span>React</span>.
						</li>
						<li className='li'>
							Mastered the art of web design by finishing{' '}
							<a href='https://infoacademy.net/' target='_blank'>
								Info Academy's
							</a>{' '}
							HTML5/CSS3 course, refining my ability to create
							visually stunning and functional web experiences.
						</li>
						<li className='li'>
							Strengthened my programming proficiency by
							successfully completing another course at
							InfoAcademy, this time focusing on JavaScript. This
							course deepened my understanding of this versatile
							and dynamic language.
						</li>
						<li className='li'>
							Collaborated seamlessly with seasoned developers to
							create and maintain a dynamic portfolio of
							responsive websites. My expertise in HTML, CSS,
							JavaScript, and content management systems (CMS)
							played a pivotal role in this endeavor.
							Additionally, I gained experience in consuming and
							integrating third-party application programming
							interfaces (APIs) into applications
						</li>
						<p className='li'>
							Check out my projects and contributions on{' '}
							<a
								href='https://github.com/bbm2910'
								target='_blank'
							>
								<span>Github</span>
							</a>
							. Feel free to explore and don't hesitate to reach
							out if you'd like to collaborate on something cool!
						</p>
					</ul>
				</div>
			</div>
			<div className='cv-section'>
				<p className='cv-date'>2019 - 2022</p>
				<div>
					<p className='cv-section-title'>
						General Manager - D&B Decorators
					</p>
					<img
						src={ContructionIcon}
						alt='construction-icon'
						className='construction-icon'
					></img>
					<ul>
						<li className='li li-act-as-paragraph'>
							As a dedicated team leader, I've consistently
							showcased outstanding leadership abilities through
							my adeptness at providing crystal-clear guidance and
							nurturing a culture of collaboration within my team.
							I've also excelled in the art of teamwork, fostering
							strong partnerships with contractors, valuing their
							specialized insights, and seamlessly integrating
							their expertise into our project planning and
							execution.
						</li>
						<li className='li li-act-as-paragraph'>
							My prowess in communication has been a linchpin in
							ensuring that everyone involved is in perfect
							harmony with our project goals, fostering a sense of
							unity and shared purpose. Moreover, my role has
							extended to reading and deciphering complex
							technical drawings, skillfully leveraging them to
							craft meticulous plans and execute projects with
							precision.
						</li>
						<li className='li li-act-as-paragraph'>
							Beyond that, I've demonstrated a keen financial
							acumen, showcasing my decision-making prowess by
							singlehandedly managing both the commercial and
							financial budgets of our company, a testament to my
							exceptional financial stewardship.
						</li>
					</ul>
				</div>
			</div>
			<div className='cv-section'>
				<p className='cv-date'>2011 - 2019</p>
				<div>
					<p className='cv-section-title'>Additional Experience</p>
					<img
						src={RulerIcon}
						alt=''
						className='ruler-camera-icon'
					></img>
					<img
						src={CameraIcon}
						alt=''
						className='ruler-camera-icon'
					></img>
					<ul>
						<li className='li'>
							General Builder - Moses Property Services
						</li>
						<li className='li'>
							Camera Assistant,{' '}
							<a href='https://www.digi24.ro/' target='_blank'>
								Digi 24
							</a>
						</li>
						<li className='li'>
							Camera Assistant,{' '}
							<a href='https://www.b1tv.ro/' target='_blank'>
								B1 TV
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='cv-section'>
				<p className='cv-date'>2009-2012</p>
				<div>
					<p className='cv-section-title'>Education & Credentials</p>
					<img
						src={EducationIcon}
						alt=''
						className='ruler-camera-icon'
					></img>
					<ul>
						<li className='li'>
							BSc Management Economics, Spiru Haret University,
							Bucharest
						</li>
						<li className='li'>
							Spiru Haret High School A-Level in Electrical
							Engineering
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CvComponent;
