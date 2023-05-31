import React,{useState} from "react";

export default function Square({value,onSquareClick}) {
	//const [value, setValue] = React.useState(null);


	return (
		<button className="square" 
		onClick={onSquareClick}
		>{value}</button>
	);
}