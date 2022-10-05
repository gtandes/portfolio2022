import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subcomponents/LogoComponent';
import PowerButton from '../subcomponents/PowerButton';
import SocialIcons from '../subcomponents/SocialIcons';
import { YinYang } from './AllSVGs';
import Intro from './Intro';
import mail from '../assets/Images/icons8-send-email-50.png';

export const Contact = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: fixed;
	top: 2rem;
	right: calc(1rem + 2vw);
	text-decoration: none;
	z-index: 1;
`;

const WEB3 = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transform: translate(50%, -50%) rotate(90deg);
	text-decoration: none;
	z-index: 1;

	@media (max-width: 768px) {
		right: 2rem;
	}
`;

const WORK = styled(NavLink)`
	color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	left: calc(1rem + 2vw);
	transform: translate(-50%, -50%) rotate(-90deg);
	text-decoration: none;
	z-index: 1;

	@media (max-width: 768px) {
		left: 2rem;
	}
`;

const BottomBar = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 1rem;
	width: 100%;

	display: flex;
	justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
	color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
	text-decoration: none;
	z-index: 1;
`;

const SKILLS = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;
`;

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
	}
`;

const Container = styled.div`
	padding: 2rem;
`;

const rotate = keyframes`from:{transform: rotate(0);} to{transform:rotate(360deg);}`;

const Center = styled.button`
	position: absolute;
	top: ${(props) => (props.clicked ? '85%' : '50%')};
	left: ${(props) => (props.clicked ? '92%' : '50%')};
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;

	& > :first-child {
		animation: ${rotate} infinite 1.5s linear;
	}

	& > :last-child {
		display: ${(props) => (props.clicked ? 'none' : 'inline-block')};
		padding-top: 1rem;
	}

	@media (max-width: 768px) {
		width: ${(props) => (props.clicked ? '60px' : '')};
		height: ${(props) => (props.clicked ? '60px' : '')};
		left: ${(props) => (props.clicked ? '90vw' : '')};
	}
`;

const DarkDiv = styled.div`
	position: absolute;
	background-color: #000;
	top: 0;
	bottom: 0;
	right: 50%;
	width: ${(props) => (props.clicked ? '50%' : '0%')};
	height: ${(props) => (props.clicked ? '100%' : '0%')};
	z-index: 1;
	transition: height 0.5s ease, width 0.5s ease 0.5s;
`;

export const fadeInSlowly = {
	initial: {
		opacity: 0,
		transition: { duration: 0.5, delay: 0.5 },
	},
	animate: {
		opacity: 1,
		transition: { duration: 0.5, delay: 0.5 },
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};

const MainPage = () => {
	const [clicked, setclicked] = useState(false);

	return (
		<MainContainer>
			<DarkDiv clicked={clicked} />

			<Container>
				<PowerButton />
				<LogoComponent theme={clicked ? 'dark' : 'light'} />
				<SocialIcons theme={clicked ? 'dark' : 'light'} />

				<Center clicked={clicked}>
					<YinYang
						onClick={() => {
							setclicked(!clicked);
						}}
						width={clicked ? 120 : 200}
						height={clicked ? 120 : 200}
						color='currentColor'
					/>
					<div>
						<img
							src='https://see.fontimg.com/api/renderfont4/VMGx/eyJyIjoiZnMiLCJoIjoxOSwidyI6MTAwMCwiZnMiOjE5LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/dG91Y2ggbWU/gbshinto-regular.png'
							alt='Anime fonts'
						/>
					</div>
				</Center>

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

				<WEB3 to='/web3' clicked={clicked}>
					<motion.h2
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						variants={fadeInSlowly}
						initial='initial'
						animate='animate'
						exit='exit'>
						Web 3.0
					</motion.h2>
				</WEB3>

				<WORK to='/web2' clicked={clicked}>
					<motion.h2
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						variants={fadeInSlowly}
						initial='initial'
						animate='animate'
						exit='exit'>
						Web 2.0
					</motion.h2>
				</WORK>

				<BottomBar>
					<ABOUT to='/about' clicked={clicked}>
						<motion.h2
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							variants={fadeInSlowly}
							initial='initial'
							animate='animate'
							exit='exit'>
							About
						</motion.h2>
					</ABOUT>

					<SKILLS to='/skills' clicked={clicked}>
						<motion.h2
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							variants={fadeInSlowly}
							initial='initial'
							animate='animate'
							exit='exit'>
							Skills
						</motion.h2>
					</SKILLS>
				</BottomBar>
			</Container>

			{clicked && <Intro clicked={clicked} />}
		</MainContainer>
	);
};

export default MainPage;
