import Square from "./square";
import React from "react";

export default function Board(){
  //multiple children communicate with each other through a parent component
  // done using shared state as below
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  
  //keep track of who is next
  const [xIsNext, setXIsNext] = React.useState(true);
  

	function handleClick(i){
      //console.log("handleClick");
      if (squares[i])
        return;
      const nextSq = squares.slice();
      if (xIsNext){
        nextSq[i] = 'X';
      }
      else{
        nextSq[i] = 'O';
      }
      setSquares(nextSq);
      setXIsNext(!xIsNext);
	  }
	
    //decide winner


  return (
    <>
        {/*each Square should pass a value and
        if clicked the "value" is changed
        as it should be rendered on the screen
        
          --
          Since state is private to a component that defines it, 
          we cannot update the Board’s state directly from Square.
          --

        To keep trigger value, when button is clicked
          we use EventListerner here instead of child*/}
          <div className="board-row"> 
            <Square value={squares[0]} onSquareClick = {()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick = {()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick = {()=>handleClick(2)}/>
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick = {()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick = {()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick = {()=>handleClick(5)}/>
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick = {()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick = {()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick = {()=>handleClick(8)}/>
          </div>
        
    </>
  );
}


