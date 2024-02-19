import './Description.css';
const Description = ({ reference }) => {
	return (
		<div ref={reference} className='description'>
			<div>
				<h2>&lt; Welcome to my portofolio/&gt;</h2>
			</div>
			<p>
				I'm Bobby, a dynamic individual who transitioned from property
				services and TV production to become a passionate web developer.
				My diverse background, ranging from navigating challenges in
				London's property services sector to thriving in the fast-paced
				world of television, has honed my problem-solving abilities and
				taught me to excel under pressure. Running my own business
				further cultivated my creativity and entrepreneurial spirit.
			</p>
			<p>
				Now, as a Web Developer, I'm passionate about merging innovation
				with technology. My unique journey has equipped me with a
				multifaceted perspective, empowering me to tackle web
				development challenges with creativity and resourcefulness. I'm
				dedicated to crafting user-centered digital solutions that
				seamlessly blend creativity and functionality
			</p>
			<p>
				Thank you for visiting, and I look forward to connecting with
				you soon!
			</p>
		</div>
	);
};

export default Description;
