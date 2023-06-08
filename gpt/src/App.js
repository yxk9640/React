import React from 'react';
import {Brand, CTA, Navbar} from './components/comp_index.js';
import {Footer, Header, Possibility, WhatGPT3, Blog, Features } from './containers/container_index.js';
import './App.css';


const App = () => {
	return(
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />

		</div>
	);
};

export default App;