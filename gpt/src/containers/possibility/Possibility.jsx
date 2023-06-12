import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
	<div className='gpt3__possibility section__padding' id='possibility'>
		<div className='gpt3__possibility-image'>
			<img src={possibilityImage} alt='possibility' />
		</div>
		<div className='gpt3__possibility-content'>
			<h4>Request Early Access to Get Started </h4>
			<h1 className='gradient__text'> The Possibilities are beyond your imagination</h1>
			<p> Yet bed any for travelling.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
			<h4>Request Early Access to Get Started</h4>
		</div>
	</div>
  )
}

export default Possibility
