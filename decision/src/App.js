import {useContext} from 'react'
import './assests/App.css';
import 'animate.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {ToastContainer} from 'react-toastify';


//implemented by functinal components
import {Initial, Result, Confirm} from './components/components';
//implemented by class components
import {MyContext} from './context/context';

//function App() {}
const App = () => {
  const context = useContext(MyContext);
  //Define when each component is displayed
  const displayComponent = () => {

    const screen = context.state.screen;
    switch(screen) {
      case 0: return <Initial />;
      case 1: return <Confirm />;
      case 2: return <Result />;
      default: return(<div><h1>Invalid screen</h1></div>);
    }

  }

  return (
    <div className='container'>
      {/*//Apply transition*/}
      <SwitchTransition mode = 'out-in'>
            <CSSTransition
            //why did he use key here?
            key={context.state.screen}
            timeout={500}
            classNames='fade'
            >
                  {displayComponent()} 
            </CSSTransition>
      </SwitchTransition>
      
    </div>
  );
}

export default App;
