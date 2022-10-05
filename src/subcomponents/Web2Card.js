import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSVGs';

const Box = styled(motion.li)`
	width: 16rem;
	height: 40vh;
	background-color: ${(props) => `rgba(${props.theme.textRgba},0.85)`};
	color: ${(props) => props.theme.body};
	padding: 1.5rem 2rem;
	margin-right: 8rem;
	backdrop-filter: blur(1px);
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

	border: 1px solid ${(props) => props.theme.body};
	border-radius: 0 50px 0 50px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	transition: all 0.2s ease;

	&:hover {
		background-color: ${(props) => props.theme.body};
		color: ${(props) => props.theme.text};
		border: 1px solid ${(props) => props.theme.text};
	}
`;

const Title = styled.h2`
	font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
	font-size: calc(0.8em + 0.3vw);
	font-family: 'Poppins', sans-serif;
	font-weight: 500;

	@media (max-width: 480px) {
		font-size: calc(0.9em + 0.5vw);
	}
`;

const Tags = styled.div`
	padding-top: 0.5rem;
	display: flex;
	flex-wrap: wrap;

	border-top: 2px solid ${(props) => props.theme.body};

	${Box}:hover & {
		border-top: 2px solid ${(props) => props.theme.text};
	}
`;

const Tag = styled.span`
	margin-right: 1rem;
	font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
`;

const Link = styled(NavLink)`
	background-color: ${(props) => props.theme.body};
	color: ${(props) => props.theme.text};
	text-decoration: none;
	padding: 0.5rem calc(2rem + 2vw);
	border-radius: 0 0 0 50px;
	font-size: calc(1em + 0.5vw);

	${Box}:hover & {
		background-color: ${(props) => props.theme.text};
		color: ${(props) => props.theme.body};
	}
`;

const Git = styled(NavLink)`
	color: inherit;
	text-decoration: none;

	${Box}:hover & {
		& > * {
			fill: ${(props) => props.theme.text};
		}
	}
`;

// framer motion config
const Item = {
	hidden: { scale: 0 },
	show: { scale: 1, transition: { type: 'spring', duration: 0.5 } },
};

const Card = (props) => {
	const { id, name, description, tags, demo, github } = props.work;

	return (
		<Box key={id} variants={Item}>
			<Title>{name}</Title>
			<Description>{description}</Description>
			<Tags>
				{tags.map((tag, id) => (
					<Tag key={id}>#{tag}</Tag>
				))}
			</Tags>

			<Footer>
				<Link to={{ pathname: `${demo}` }} target='_blank'>
					Visit
				</Link>

				<Git to={{ pathname: `${github}` }} target='_blank'>
					<Github width={30} height={30} />
				</Git>
			</Footer>
		</Box>
	);
};

export default Card;
