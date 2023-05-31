import Board from "./board";
//import Square from "./square";
import React from "react";

export default function Game(){
  //Multiple universal States
  //const [xIsNext, setXIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  
  const [currentMove, setCurrentMove] = React.useState(0);
  const xIsNext = (currentMove % 2) === 0;

  // This will update how to display the game’s status message
  // so when we go back in time, we can see what each move was.
  const currentSq = history[currentMove];


  function handlePlay(nextSq) {
    // keeps track of history from the start to end
    //setHistory([...history, nextSq]);
    //setXIsNext(!xIsNext);

    //keeps track of history from the start to current move
    // when we go back in time and make a new move from that point,
    // we throw away all the "future" history that would now become incorrect.
    const nextHistory = [...history.slice(0, currentMove+1), nextSq ];
    setHistory(nextHistory);

    //Keep track of step.
    setCurrentMove(nextHistory.length - 1);
    //setXIsNext(!xIsNext); //redundant
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    //setXIsNext((nextMove % 2) === 0); //redundant

  }

  const moves = history.map((squares, move) => {

    let description;
     if (move > 0){
        description = 'Go to move #' + move;
     }
     else{
      description = 'Go to start';
     }

     return (
      <li key={move}>
        <button onClick = {() => jumpTo(move)}>{description}</button>
      </li>
      )

  });

  return (
    <div className="game">
      <div className="game-board">
        <Board 
        xIsNext = {xIsNext}
        squares = {currentSq}
        onPlay = {handlePlay}

        />
      </div>
      <div className="game-info">
        <ol> {moves} </ol>
      </div>

    </div>
  );
}


/*
Skeleton 
array.map((arg_item) => expression_to_process_item_return )
history.map(() 
=> {

})
*/