import styled from '@emotion/styled';
import {AppBar, Toolbar, Typography} from '@mui/material'
import React from 'react';
import CustomSwitch from './CustomSwitch';

const StyledAppBar = styled(AppBar)(({theme}) => ({
	backgroundColor: '#1F2937',
}));

const NavBar = () => {
  return (
	<div id='navbar'>
		<StyledAppBar position='static'>
			<Toolbar className='flex justify-between'>
				<Typography variant='h6' className='font-serif animate-bounce' component="div" style={{fontWeight: 'bold', color: '#FFFFFF' }}>
					Dark Theme Implementation
				</Typography>
				<div>
					<CustomSwitch />
				</div>

			</Toolbar>
		</StyledAppBar>
	</div>
  )
}

export default NavBar
