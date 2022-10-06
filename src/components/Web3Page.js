import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import img from '../assets/Images/btc-unsplash.jpg';
import LogoComponent from '../subcomponents/LogoComponent';
import PowerButton from '../subcomponents/PowerButton';
import SocialIcons from '../subcomponents/SocialIcons';
import BlogComponent from './Web3Card';
import { Blogs } from '../data/BlogData';
import { motion } from 'framer-motion';
import { YinYang } from './AllSVGs';
import { Contact, fadeInSlowly } from './MainPage';
import mail from '../assets/Images/icons8-send-email-50.png';

const BlogMainContainer = styled(motion.div)`
	background-image: url(${img});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;

const Container = styled.div`
	background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
	width: 100%;
	height: auto;
	position: relative;
	padding-bottom: 5rem;
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10rem;

	@media (max-width: 768px) {
		padding-top: 7rem;
	}
	@media (max-width: 480px) {
		padding-top: 6rem;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
	grid-gap: calc(1rem + 2vw);

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

const Rotate = styled.span`
	display: block;
	position: fixed;
	right: 5rem;
	bottom: 5rem;

	width: 120px;
	height: 120px;

	@media (max-width: 1200px) {
		/* display: none; */

		.smallscreen {
			/* display: none; */
			width: 60px;
			height: 60px;
		}

		width: 60px;
		height: 60px;

		right: 2rem;
		bottom: 3rem;
	}
`;

// framer motion config
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const Web3Page = () => {
	const yinyang = useRef(null);

	useEffect(() => {
		const rotate = () => {
			yinyang.current.style.transform =
				`rotate(` + -window.pageYOffset + 'deg)';
		};

		window.addEventListener('scroll', rotate);

		return () => window.removeEventListener('scroll', rotate);
	}, []);

	return (
		<BlogMainContainer
			variants={container}
			initial='hidden'
			animate='show'
			exit='exit'>
			<Container>
				<LogoComponent />
				<PowerButton />
				<SocialIcons />
				<Contact
					to={{ pathname: 'mailto:andesgregthomas@gmail.com' }}
					target='_blank'>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						variants={fadeInSlowly}
						initial='initial'
						animate='animate'
						exit='exit'>
						<img src={mail} alt='email icon' />
					</motion.div>
				</Contact>

				<Center>
					<Grid variants={item}>
						{Blogs.map((blog) => (
							<BlogComponent blog={blog} key={blog.id} />
						))}
					</Grid>
				</Center>

				<Rotate ref={yinyang}>
					<YinYang width={120} height={120} className='smallscreen' />
				</Rotate>
			</Container>
		</BlogMainContainer>
	);
};

export default Web3Page;
