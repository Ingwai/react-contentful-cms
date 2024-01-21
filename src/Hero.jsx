import React from 'react';
import hero from './assets/hero.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p className='small'>
						I'm baby four dollar toast artisan coloring book, praxis vegan chartreuse four loko mustache blue bottle pok
						pok asymmetrical same deep v freegan. Retro offal tofu microdosing shabby chic tattooed trust fund JOMO
						typewriter lumbersexual green juice tilde XOXO ugh. Small batch sartorial direct trade copper mug fit you
						probably haven't heard of them.
					</p>
				</div>
				<div className='img-container'>
					<img src={hero} alt='' className='img' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
