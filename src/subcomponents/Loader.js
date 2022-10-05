import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Image = ({ src, fallback, type = 'image/webp', alt }) => {
	return (
		<picture>
			<source srcSet={src} type={type} />
			<img src={fallback} alt={alt} />
		</picture>
	);
};

// Import images
const container = {
	show: {
		transition: {
			staggerChildren: 0.35,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 200 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		y: -200,
		transition: {
			ease: 'easeInOut',
			duration: 0.8,
		},
	},
};

// const itemMain = {
// 	hidden: { opacity: 0, y: 200 },
// 	show: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			ease: [0.6, 0.01, -0.05, 0.95],
// 			duration: 1.6,
// 		},
// 	},
// };

export const ImageBlock = ({ posX, posY, variants, id }) => {
	return (
		<motion.div
			variants={variants}
			className={`image-block ${id}`}
			style={{
				top: `${posY}vh`,
				left: `${posX}vw `,
			}}>
			<Image
				src={process.env.PUBLIC_URL + `/images/${id}.webp`}
				fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
				alt={id}
			/>
		</motion.div>
	);
};

const LoaderContainer = styled.div`
	body.loading {
		overflow: hidden;
		height: 100vh;
	}

	.loader {
		.loader-inner {
			.image-block {
				position: absolute;
				transform-origin: center;
				display: flex;
				align-items: center;
				justify-content: center;
				&.image-1 {
					width: 400px;
					left: 16%;
					bottom: 14%;
					@media (max-width: 768px) {
						left: 4%;
						bottom: 28%;
					}
				}
				&.image-3 {
					width: 300px;
					right: 12%;
					top: 8%;
					@media (max-width: 768px) {
						top: 16%;
						right: 4%;
					}
				}
				&.image-4 {
					max-width: 400px;
					width: 40%;
					right: 20%;
					bottom: 10%;
					@media (max-width: 768px) {
						right: 6%;
						bottom: 32%;
					}
				}
				&.image-5 {
					width: 280px;
					left: 14%;
					top: 12%;
					@media (max-width: 768px) {
						left: 6%;
						top: 18%;
					}
				}
				img {
					width: 100%;
					object-fit: fill;
				}
			}
		}
	}
`;

const Loader = ({ setLoading }) => {
	return (
		<LoaderContainer className='loader'>
			<motion.div
				variants={container}
				onAnimationComplete={() => setLoading(false)}
				initial='hidden'
				animate='show'
				exit='exit'
				className='loader-inner'>
				<ImageBlock variants={item} id='image-1' />
				{/* <motion.div variants={itemMain} className='transition-image'>
					<motion.img
						layoutId='main-image-1'
						src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
					/>
				</motion.div> */}
				<ImageBlock variants={item} id='image-3' />
				<ImageBlock variants={item} id='image-4' />
				<ImageBlock variants={item} id='image-5' />
			</motion.div>
		</LoaderContainer>
	);
};

export default Loader;
