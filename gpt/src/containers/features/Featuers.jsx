import React from 'react'
import './features.css';
import {Feature} from '../../components/comp_index';

const featuresData=[
	{
		title: 'Improving and distrusts instantly',
		text: 'His sir say plug talent is are. Ample order like form form civil nay. He prepare things decay do an. ',

	},
	{
		title: 'Become the tended active',
		text: 'His sir say plug talent is are. Ample order like form form civil nay. He prepare things decay do an. ',

	},
	{
		title: 'Message or am nothing',
		text: 'His sir say plug talent is are. Ample order like form form civil nay. He prepare things decay do an. ',

	},
	{
		title: 'Really Boy law county',
		text: 'His sir say plug talent is are. Ample order like form form civil nay. He prepare things decay do an. ',

	}
];
const Features = () => {
	

  return (
	<div className='gpt3__features section__padding' id='features'>
		<div className='gpt3__features-heading'>
			<h1 className='gradient__text'> The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
			<p>Request Early Access to Get Started</p>
		</div>
		<div className='gpt3__features-container'>
			{
				featuresData.map((item,index) => (
					<Feature key={item.title + index} title={item.title} text={item.text} />
				))
			}
		</div>

	</div>
  )
}

export default Features
