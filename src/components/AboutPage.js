import React from 'react';
import { motion } from 'framer-motion';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponent from '../subcomponents/LogoComponent';
import SocialIcons from '../subcomponents/SocialIcons';
import PowerButton from '../subcomponents/PowerButton';
import ParticleComponent from '../subcomponents/ParticleComponent';
import dog from '../assets/Images/spaceman.png';
import { Contact, fadeInSlowly } from './MainPage';
import mail from '../assets/Images/icons8-mail-64.png';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const Main = styled.div`
	position: absolute;
	top: 10rem;
	left: calc(5rem + 5vw);

	color: ${(props) => props.theme.text};
	font-family: 'Poppins', sans-serif;
	font-size: calc(0.6rem + 1vw);
	padding: 2rem;
	width: 58vw;
	height: 70vh;
	line-height: 1.75;
	backdrop-filter: blur(4px);
	z-index: 3;
	border: 2px solid ${(props) => props.theme.text};

	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		height: 70vh;
		width: 65vw;
		top: 7rem;
		left: calc(5rem + 4vw);
		font-size: calc(0.9rem + 1.1vw);
		line-height: 1.5;
	}

	@media (max-width: 480px) {
		height: 75vh;
		width: 50vw;
		top: 7rem;
		left: calc(5rem + 4vw);
		font-size: calc(0.8rem + 1vw);
		line-height: 1.5;
	}

	@media (max-width: 380px) {
		line-height: 1.5;
		width: 60vw;
		left: 3.5rem;
	}
`;

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`;

const Dog = styled.div`
	position: absolute;
	top: 10%;
	right: 5%;
	width: 20vw;
	animation: ${float} 4s ease infinite;

	img {
		width: 100%;
		height: auto;
	}
`;

const About = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<ParticleComponent theme='dark' />
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

				<Dog>
					<img src={dog} alt='dog' />
				</Dog>

				<Main>
					<div>
						I am currently a freelance web developer in the Philippines who
						loves this line of work. To me, web development is simply
						forever-lasting art with functionality under a layer of security.{' '}
						<br />
						<br /> I am interested in all things related to technology, and more
						so those involving the blockchain and cryptocurrencies, which is why
						I am currently focusing more on related languages like Solidity.{' '}
						<br />
						<br />
						You can connect with me via social links or by clicking on the email
						icon on the top right corner. <br />
						<br />
						<div>
							<i>"Fly me to the moon. Let me play among the stars"</i>
						</div>
					</div>
				</Main>
			</Box>
		</ThemeProvider>
	);
};

export default About;
