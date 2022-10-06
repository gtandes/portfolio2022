/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import Me from '../assets/Images/profile-img.png';
import Me2 from '../assets/Images/zzz.png';

const Box = styled(motion.div)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	width: 65vw;
	height: 55vh;
	display: flex;

	background: linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			bottom,
		linear-gradient(
				to right,
				${(props) => props.theme.body} 50%,
				${(props) => props.theme.text} 50%
			)
			top;

	background-repeat: no-repeat;
	background-size: 100% 2px;

	z-index: 1;

	border-left: 2px solid ${(props) => props.theme.body};
	border-right: 2px solid ${(props) => props.theme.text};
`;

const SubBox = styled.div`
	width: 50%;
	position: relative;
	display: flex;

	.pic,
	.pic2 {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
		width: 70%;
		height: auto;
	}

	.pic2 {
		display: none;
	}

	@media (max-width: 480px) {
		.pic,
		.pic2 {
			width: 100%;
		}

		.pic2 {
			top: 0;
			display: inline-block;
			/* bottom: 0; */
			transform: translate(-50%, 0%);
		}
	}
`;

const Text = styled.div`
	font-size: calc(1em + 1.5vw);
	color: ${(props) => props.theme.body};
	padding: 2rem;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	& > *:last-child {
		color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
		font-size: calc(0.5em + 1.5vw);
		font-weight: 300;
	}

	@media (max-width: 380px) {
		padding: 0.5rem;
	}
`;

const Intro = () => {
	return (
		<Box
			initial={{ height: 0 }}
			animate={{ height: '55vh' }}
			transition={{ type: 'spring', duration: 2, delay: 1 }}>
			<SubBox>
				<Text>
					<h1>Hi,</h1>
					<h3>I'm Greg Thomas.</h3>
					<h6>I try my best to be a very competitive developer.</h6>
				</Text>
			</SubBox>

			<SubBox>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2 }}>
					<img src={Me} alt='profile picture' className='pic' />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2 }}>
					<img src={Me2} alt='profile picture' className='pic2' />
				</motion.div>
			</SubBox>
		</Box>
	);
};

export default Intro;
