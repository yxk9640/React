import '../assests/App.css';
import React,{ useContext} from 'react';
import {MyContext} from '../context/context';


const Confirm = () => {
  const contextUpdate2 = useContext(MyContext);

  const handleDecide = () => {
    //Check answer from pool and return result
    contextUpdate2.handleScreenChange(2);
  }

  const goBack = () => {
    contextUpdate2.handleScreenChange(0);
  }

  return (
    <div className='container'>
      <h1>Your question is:</h1>
      <div className='viwer'>{contextUpdate2.state.question}</div>
      
      <div className='animate__animated animate__bounceIn animate__delay-1s'>
            <button 
              className="btn" 
            type='button'
            onClick={handleDecide}>Decide It</button>
             <br />
            <button 
            className='btn' 
            type='button'
            onClick={goBack}>Ask New Question</button>
      </div>

    </div>
  );
}

export default Confirm;
