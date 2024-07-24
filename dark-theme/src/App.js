import  Grid  from '@mui/material/Grid';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Second from './components/Second';
import {createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from './ThemeContext';

//const darkTheme = createTheme({
//  palette: {
//    mode: 'light',
//  }
//})

function App() {
  return (
        <ThemeProvider>
          <div >
              <Grid container direction='column' className='min-h-screen overflow-auto'>
                <Grid item> <NavBar/>  </Grid>
                <Grid item className='h-screen'> <HomePage /> </Grid>
                <Grid item className='h-screen'> <Second /></Grid>
              </Grid>
          </div>
        </ThemeProvider>
      
  );
}

export default App;
