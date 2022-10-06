import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSVGs';
import LogoComponent from '../subcomponents/LogoComponent';
import SocialIcons from '../subcomponents/SocialIcons';
import PowerButton from '../subcomponents/PowerButton';
import ParticleComponent from '../subcomponents/ParticleComponent';
import { Contact, fadeInSlowly } from './MainPage';
import { motion } from 'framer-motion';

// images
import mail from '../assets/Images/icons8-send-email-50.png';
import framer from '../assets/Images/framer.png';
import bootstrap from '../assets/Images/bootstrap.png';
import sass from '../assets/Images/sass.png';
import tailwind from '../assets/Images/tailwind.png';
import figma from '../assets/Images/figma.png';
import canva from '../assets/Images/canva.png';
import shotcut from '../assets/Images/shotcut.png';
import gimp from '../assets/Images/gimp.png';
import nodejs from '../assets/Images/node.png';
import typescript from '../assets/Images/typescript.png';
import nextjs from '../assets/Images/nextjs.png';
import solidity from '../assets/Images/solidity.png';
import vscode from '../assets/Images/vscode.png';
import github from '../assets/Images/github.png';
import netlify from '../assets/Images/netlify.png';
import remix from '../assets/Images/remix.png';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 768px) {
		height: 175vh;
	}
	@media (max-width: 480px) {
		height: 145vh;
	}
	@media (max-width: 380px) {
		height: 155vh;
	}
`;

const Grid = styled(motion.div)`
	position: absolute;
	display: grid;
	grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
	grid-gap: calc(1rem + 2vw);

	@media (max-width: 768px) {
		top: 7rem;
		display: flex;
		flex-direction: column;
	}
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.9)`};
	backdrop-filter: blur(2px);
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
	padding: 2rem;
	width: 35vw;
	height: 37rem;
	z-index: 3;
	line-height: 1.5;
	cursor: pointer;

	font-family: 'Poppins', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}

	&:hover > * {
		color: ${(props) => props.theme.body};
	}

	@media (max-width: 768px) {
		width: 50vw;
		font-size: calc(1em + 1vw);
	}

	@media (max-width: 480px) {
		height: 29rem;
	}

	@media (max-width: 380px) {
		font-size: calc(1em + 1vw);
		height: 30rem;
		padding-bottom: 4rem;
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);
	padding: 0.5em 0;

	& > *:first-child {
		margin-right: 1rem;
	}

	${Main}:hover & {
		& > * {
			fill: ${(props) => props.theme.body};
		}
	}
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 0.75rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: justify;

	strong {
		text-transform: uppercase;
	}

	@media (max-width: 480px) {
		font-size: calc(0.6em + 0.5vw);
		padding: 0rem 0;

		strong {
			display: none;
		}
	}
`;

const SkillIconsContainer = styled.div`
	display: grid;
	height: 13.5vh;
	width: 100%;
	align-items: center;
	justify-content: center;

	grid-template-columns: repeat(4, minmax(calc(3rem + 3vw), 1fr));
	grid-gap: calc(0.5rem + 1vw);

	@media (max-width: 768px) {
		transform: translateX(3%);
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(2, minmax(calc(3rem + 3vw), 1fr));
		padding: 1rem 0;
		transform: translateX(10%);
	}

	@media (max-width: 380px) {
		padding: 0.75rem 0;
		padding-bottom: 1.5rem;
		transform: translateX(4%);
	}
`;

const SkillIconsCard = styled.div`
	width: calc(1rem + 6vw);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > img {
		width: calc(0.75rem + 3vw);
	}

	@media (max-width: 768px) {
		height: 60px;
		width: 60px;

		& > img {
			height: 50px;
			width: 50px;
		}
	}

	@media (max-width: 480px) {
		height: 60px;
		width: 60px;

		& > img {
			height: 50px;
			width: 50px;
		}

		@media (max-width: 380px) {
			padding: 0.5rem;
			height: 50px;
			width: 60px;

			& > img {
				height: 50px;
				width: 50px;
			}
		}
	}
`;

// framer motion config
const Item = {
	hidden: { scale: 0 },
	show: {
		scale: 1,
		transition: { type: 'spring', staggerChildren: 1, duration: 1 },
	},
};

const MySkillsPage = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Box>
				<ParticleComponent theme='light' />
				<LogoComponent theme='light' />
				<SocialIcons theme='light' />
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

				<Grid variants={Item} initial='hidden' animate='show'>
					<Main>
						<Title>
							<Design width={40} height={40} /> Aesthetics & Site Interaction
						</Title>

						<Description>
							I love making websites look outstanding and ensuring that users
							have great experience.
						</Description>

						<Description>
							<strong>Lang & Frameworks</strong>
							<SkillIconsContainer>
								<SkillIconsCard>
									<img src={framer} alt='email icon' />
									<h6>Framer</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={bootstrap} alt='email icon' />
									<h6>Bootstrap</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={sass} alt='email icon' />
									<h6>Sass</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={tailwind} alt='email icon' />
									<h6>Tailwind</h6>
								</SkillIconsCard>
							</SkillIconsContainer>

							<strong>Tools</strong>
							<SkillIconsContainer>
								<SkillIconsCard>
									<img src={figma} alt='email icon' />
									<h6>Figma</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={canva} alt='email icon' />
									<h6>Canva</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={shotcut} alt='email icon' />
									<h6>Shotcut</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={gimp} alt='email icon' />
									<h6>Gimp</h6>
								</SkillIconsCard>
							</SkillIconsContainer>
						</Description>
					</Main>

					<Main>
						<Title>
							<Develope width={40} height={40} /> Functionality & Security
						</Title>

						<Description>
							Projects comply to required functionality and security for user
							data or finances.
						</Description>

						<Description>
							<strong>Lang & Frameworks</strong>
							<SkillIconsContainer>
								<SkillIconsCard>
									<img src={nodejs} alt='email icon' />
									<h6>NodeJS</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={typescript} alt='email icon' />
									<h6>Typescript</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={nextjs} alt='email icon' />
									<h6>NextJS</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={solidity} alt='email icon' />
									<h6>Solidity</h6>
								</SkillIconsCard>
							</SkillIconsContainer>
						</Description>

						<Description>
							<strong>Tools</strong>
							<SkillIconsContainer>
								<SkillIconsCard>
									<img src={vscode} alt='email icon' />
									<h6>VSCode</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={github} alt='email icon' />
									<h6>Github</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={netlify} alt='email icon' />
									<h6>Netlify</h6>
								</SkillIconsCard>
								<SkillIconsCard>
									<img src={remix} alt='email icon' />
									<h6>Remix</h6>
								</SkillIconsCard>
							</SkillIconsContainer>
						</Description>
					</Main>
				</Grid>
			</Box>
		</ThemeProvider>
	);
};

export default MySkillsPage;
