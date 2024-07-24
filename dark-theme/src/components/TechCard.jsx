import {Card, CardContent, Typography, Box} from '@mui/material'
import React from 'react';
import '../styles/TechCard.css';

const techStack = [
	{ name: 'Java'},
	{ name: 'Spring Boot'},
	{ name: 'React'},
	{ name: 'HTML'},
	{ name: 'TypeScript'},
	{ name: 'JavaScript'},
  ];

const TechCard = () => {
  return (
	<Card className='tech-card' sx={{maxWidth: 400,marginLeft:40 , marginTop: 20, backgroundColor: '#1e1e1e', color: 'white', boxShadow: '0 4px 8px rgba(255, 105, 97, 0.5)' }}>
		<CardContent>
			<Typography variant="h4" component="div" className='text-center border-b-2 border-amber-800'  gutterBottom> Working On </Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2, padding:'10px' }}>
				{techStack.map( (tech, index) => (
					<Box key={tech.name} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '10px' }}> 
						<Typography variant="body1" component="div" sx={{ marginTop: 1 }}> {tech.name} </Typography>
					</Box>

				))}
			</Box>
		</CardContent>
	  
	</Card>
  )
}

export default TechCard
