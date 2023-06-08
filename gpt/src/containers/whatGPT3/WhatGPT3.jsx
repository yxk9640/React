import React from 'react'
import './whatGPT3.css';
import {Feature} from '../../components/comp_index';


const WhatGPT3 = () => {
  return (
	<div className='gpt3__whatgpt3 section_margin' id='wgpt3'>
		<div className='gpt3__whatgpt3-feature'>
			<Feature title='What is GPT-3' text='Text of GPT-3 Copy from Figma'/>
		</div>
		<div className='gpt3__whatgpt3-heading'>
			<h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
			<p> Explore the Library</p>
		</div>
		<div className='gpt3__whatgpt3-container'>
			<Feature title='Chatbots' text='Text of ChatBots Copy from Figma'/>
			<Feature title='Knowledge-base' text='Text of Knowledge Base Copy from Figma'/>
			<Feature title='Education' text='Text of Education Copy from Figma'/>
		</div>

	</div>
  )
}

export default WhatGPT3
