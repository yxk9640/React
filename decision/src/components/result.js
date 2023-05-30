import '../assests/App.css';
import { MyContext} from '../context/context';
import React,{useContext,useEffect} from 'react';


const Result = () => {
  
  const contextUpdate3 = useContext(MyContext);

  // Handled in context update which triggers result, reset
  
  //const handleReCheck = () => {
  //  contextUpdate3.handleScreenChange(2);
  //}

  //const handleStartOver = () => {
  //  contextUpdate3.handleScreenChange(0);
  //}

  useEffect(() => {
    contextUpdate3.result();
  },[]) //use [] to stop infinite loop

  
  return (
    <div className='container'>
      <h1>Your answer is...</h1>
      <div className='viewer'>{contextUpdate3.state.result}</div>

      <div className='animate__animated animate__bounceIn animate__delay-1s'>
        <button className='btn'
          type='button'
          onClick={contextUpdate3.result}
          > Check again </button>

        <button className='btn'
          type='button'
          onClick={contextUpdate3.reset}
          > Start over </button>
      </div>
    </div>
  );
}

export default Result;
