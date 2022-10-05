import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Anchor, Link } from '../components/AllSVGs';

const Container = styled.div`
	position: relative;
`;

const PreDisplay = styled.div`
	position: absolute;
	top: 0;
	right: 2rem;
`;

const Slider = styled.div`
	position: fixed;
	top: 0;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: translateY(-100%);

	.chain {
		transform: rotate(135deg);
	}
`;

const AnchorComponent = (props) => {
	const ref = useRef(null);
	const hiddenref = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			let scrollPosition = window.pageYOffset;
			let windowHeight = window.innerHeight;
			let docBodyHeight = document.body.offsetHeight;

			let diff = Math.max(docBodyHeight - (windowHeight + scrollPosition));

			// diff * 100 / scrollPosition
			let diffPercent = (diff * 100) / (docBodyHeight - windowHeight);

			ref.current.style.transform = `translateY(${-diffPercent}%)`;

			if (window.pageYOffset > 5) {
				hiddenref.current.style.display = 'none';
			} else {
				hiddenref.current.style.display = 'block';
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Container>
			<PreDisplay ref={hiddenref} className='hidden'>
				<Anchor width={70} height={70} fill='currentColor' />
			</PreDisplay>

			<Slider ref={ref}>
				{[...Array(props.numbers)].map((item, id) => (
					<Link
						width={25}
						height={25}
						className='chain'
						key={id}
						fill='currentColor'
					/>
				))}

				<Anchor width={70} height={70} fill='currentColor' />
			</Slider>
		</Container>
	);
};

export default AnchorComponent;
