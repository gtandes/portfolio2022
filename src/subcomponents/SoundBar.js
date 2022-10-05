import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import music from '../assets/audio/prontera.mp3';

const play = keyframes`
0%{transform:scaleY(1);
}
50%{transform:scaleY(2);
}
100%{transform:scaleY(1);
}
`;

const Line = styled.span`
	background: ${(props) => props.theme.text};
	height: 1rem;
	width: 2px;
	margin: 0 0.1rem;
	border: 1px solid ${(props) => props.theme.body};

	animation: ${play} 1s ease infinite;
	animation-play-state: ${(props) => (props.clicked ? 'running' : 'paused')};
`;

const Box = styled.div`
	display: flex;
	cursor: pointer;
	position: fixed;
	top: 3rem;
	left: 15rem;
	z-index: 10;

	& > *:nth-child(1) {
		animation-delay: 0.2s;
	}
	& > *:nth-child(2) {
		animation-delay: 0.3s;
	}
	& > *:nth-child(3) {
		animation-delay: 0.4s;
	}
	& > *:nth-child(4) {
		animation-delay: 0.5s;
	}
	& > *:nth-child(5) {
		animation-delay: 0.8s;
	}

	@media (max-width: 768px) {
		top: 3rem;
		left: 2rem;
	}
`;

const SoundBar = () => {
	const ref = useRef(null);
	const [clicked, setclicked] = useState(false);

	const toggleClickState = () => {
		setclicked(!clicked);

		if (!clicked) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	};

	return (
		<Box onClick={toggleClickState}>
			<Line clicked={clicked} />
			<Line clicked={clicked} />
			<Line clicked={clicked} />
			<Line clicked={clicked} />
			<Line clicked={clicked} />
			<audio src={music} ref={ref} loop />
		</Box>
	);
};

export default SoundBar;
