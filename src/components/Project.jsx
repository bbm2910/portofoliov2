import './Project.css';
import WeatherImg from '../assets/weather-app.png';
import ShopImg from '../assets/shop.png';
import RockPaperScissors from '../assets/rock-paper-scissors.png';
import MemoryGameImg from '../assets/memory-game.png';
import CalculatorImg from '../assets/calculator.png';
import TitactoeImg from '../assets/tic-tac-toe.png';
import ProjectImg from '../assets/projects.svg';

const Project = ({ reference }) => {
	return (
		<div ref={reference} className='all-projects'>
			<div>
				<h2>&lt; Projects/&gt;</h2>
				<img src={ProjectImg} alt='' className='project-img' />
			</div>
			<div className='project card'>
				<div className='card2'>
					<a
						href='https://comforting-scone-ac33d1.netlify.app'
						target='_blank'
					>
						<img src={ShopImg} alt='shopping cart website-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://comforting-scone-ac33d1.netlify.app'
								target='_blank'
							>
								<span>//Mock_shopping_cart</span>
							</a>{' '}
							HTML / CSS / React / FakeStore API
						</p>
						<a
							href='https://comforting-scone-ac33d1.netlify.app'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://reactmemoryapp.netlify.app/'
						target='_blank'
					>
						<img src={MemoryGameImg} alt='memory-game' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://reactmemoryapp.netlify.app/'
								target='_blank'
							>
								<span>//Memory_Game</span>
							</a>{' '}
							HTML / CSS / React
						</p>
						<a
							href='https://github.com/bbm2910/memory-app'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/Weather--app/'
						target='_blank'
					>
						<img src={WeatherImg} alt='weather website-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/Weather--app/'
								target='_blank'
							>
								<span>//Weather_app</span>
							</a>{' '}
							HTML / CSS / JavaScript / OpenWeatherMap API
						</p>
						<a
							href='https://github.com/bbm2910/Weather--app'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/Rock-Paper-Scissors-GAME/'
						target='_blank'
					>
						<img
							src={RockPaperScissors}
							alt='rock-paper-scissors-img'
						/>
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/Rock-Paper-Scissors-GAME/'
								target='_blank'
							>
								<span>//Rock_Paper_Scissors</span>
							</a>{' '}
							HTML / CSS / JavaScript
						</p>
						<a
							href='https://github.com/bbm2910/Rock-Paper-Scissors-GAME'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/Calculator/'
						target='_blank'
					>
						<img src={CalculatorImg} alt='calculator-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/Calculator/'
								target='_blank'
							>
								<span>//Calculator</span>
							</a>{' '}
							HTML / CSS / JavaScript
						</p>
						<a
							href='https://github.com/bbm2910/Calculator'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>

			<div className='project card'>
				<div className='card2'>
					<a
						href='https://bbm2910.github.io/Tic-Tac-Toe/'
						target='_blank'
					>
						<img src={TitactoeImg} alt='calculator-img' />
					</a>
					<div>
						{/* <span><img src="img/folder.png" alt=""></span> */}
						<p>
							<a
								href='https://bbm2910.github.io/Tic-Tac-Toe/'
								target='_blank'
							>
								<span>//Tic_Tac_Toe</span>
							</a>{' '}
							HTML / CSS / JavaScript
						</p>
						<a
							href='https://github.com/bbm2910/Tic-Tac-Toe'
							target='_blank'
							className='projects-link'
						>
							More...
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
