import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, LinkedInSVG, YouTube } from '../components/AllSVGs';
import { darkTheme } from '../components/Themes';

const Icons = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: fixed;
	left: 2rem;
	bottom: 0;
	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}

	& > motion.div > NavLink > * {
		fill: ${(props) =>
			props.theme === 'dark' ? darkTheme.text : darkTheme.body};
	}

	@media (max-width: 768px) {
		left: 1rem;
	}
	@media (max-width: 480px) {
		left: 0.75rem;
	}
	/* @media (max-width: 380px) {
		left: 0.5rem;
	} */
`;

const Line = styled(motion.span)`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === 'dark' ? darkTheme.text : darkTheme.body};
`;

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 2.5,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const SocialIcons = (props) => {
	return (
		<Icons variants={container} initial='hidden' animate='show'>
			<motion.div variants={item}>
				<NavLink
					style={{ color: 'inherit' }}
					target='_blank'
					to={{ pathname: 'https://github.com/gtandes' }}>
					<Github
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</motion.div>

			<motion.div variants={item}>
				<NavLink
					style={{ color: 'inherit' }}
					target='_blank'
					to={{
						pathname: 'https://www.linkedin.com/in/greg-thomas-andes-2b075351/',
					}}>
					<LinkedInSVG
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</motion.div>

			<motion.div variants={item}>
				<NavLink
					style={{ color: 'inherit' }}
					target='_blank'
					to={{
						pathname:
							'https://www.youtube.com/channel/UC9NIEf55XH7i58c-_nfaOow',
					}}>
					<YouTube
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</motion.div>

			<motion.div variants={item}>
				<NavLink
					style={{ color: 'inherit' }}
					target='_blank'
					to={{
						pathname: 'https://www.facebook.com/profile.php?id=100086148287259',
					}}>
					<Facebook
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					/>
				</NavLink>
			</motion.div>

			<Line
				color={props.theme}
				variants={item}
				// variants={fadeInSlowly}
				// initial='initial'
				// animate='animate'
			/>
		</Icons>
	);
};

export default SocialIcons;
