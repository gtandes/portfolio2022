import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
	display: inline-block;
	color: ${(props) => props.theme.text};
	font-family: 'Poppins', sans-serif;

	position: fixed;
	left: 3rem;
	top: 2rem;
	z-index: 3;

	@media (max-width: 768px) {
		display: none;
	}
`;

const LogoComponent = (props) => {
	return (
		<Logo>
			{props.theme === 'dark' ? (
				<img
					src='https://see.fontimg.com/api/renderfont4/VMGx/eyJyIjoiZnMiLCJoIjo2NywidyI6MTAwMCwiZnMiOjY3LCJmZ2MiOiIjRkZGOEY4IiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/R1RB/gbshinto-regular.png'
					alt='Anime fonts'
				/>
			) : (
				<img
					src='https://see.fontimg.com/api/renderfont4/VMGx/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Z3Rh/gbshinto-regular.png'
					alt='Anime fonts'
				/>
			)}
		</Logo>
	);
};

export default LogoComponent;
