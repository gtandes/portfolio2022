import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponent from '../subcomponents/LogoComponent';
import SocialIcons from '../subcomponents/SocialIcons';
import PowerButton from '../subcomponents/PowerButton';
import { Work } from '../data/WorkData';
import Card from '../subcomponents/Web2Card';
import { YinYang } from './AllSVGs';
import { motion } from 'framer-motion';
import { Contact, fadeInSlowly } from './MainPage';
import mail from '../assets/Images/icons8-mail-64.png';
import img from '../assets/Images/roman-synkevych-vXInUOv1n84-unsplash.jpg';

const Web2MainContainer = styled.div`
	background-image: url(${img});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;

const Box = styled.div`
	background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
	height: 400vh;
	position: relative;
	display: flex;
	align-items: center;
`;

const Main = styled(motion.ul)`
	position: fixed;
	top: 12rem;
	left: calc(10rem + 15vw);
	height: 40vh;
	display: flex;
	color: white;
`;

const Rotate = styled.span`
	display: block;
	position: fixed;
	right: 5rem;
	bottom: 5rem;

	width: 120px;
	height: 120px;

	@media (max-width: 768px) {
		.smallscreen {
			height: 60px;
			width: 60px;
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
	show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } },
};

const Web2Page = () => {
	const ref = useRef(null);
	const yinyang = useRef(null);

	useEffect(() => {
		let element = ref.current;

		const rotate = () => {
			element.style.transform = `translateX(${-window.pageYOffset}px)`;
			yinyang.current.style.transform =
				`rotate(` + -window.pageYOffset + 'deg)';
		};

		window.addEventListener('scroll', rotate);

		return () => window.removeEventListener('scroll', rotate);
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<Web2MainContainer>
				<Box>
					<LogoComponent theme='dark' />
					<SocialIcons theme='dark' />
					<PowerButton />

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

					<Main ref={ref} variants={container} animate='show' initial='hidden'>
						{Work.map((work) => (
							<Card key={work.id} work={work}>
								Work Data
							</Card>
						))}
					</Main>

					<Rotate ref={yinyang}>
						<YinYang
							width={120}
							height={120}
							fill={darkTheme.text}
							className='smallscreen'
						/>
					</Rotate>
				</Box>
			</Web2MainContainer>
		</ThemeProvider>
	);
};

export default Web2Page;
