import '../assests/App.css';
import {useRef,React, useState} from 'react';


const Initial = () => {
	//store the question value in state
	const textInput = useRef(null);
	//store in state
	const [showNext, setShowNext] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	
	const handleChange = () => {
		if (textInput.current.value.length >= 5)
			setShowNext(true);
		else
			setShowNext(false);
	}

	const handleSubmit = () => {
		if (textInput.current.value.length > 30)
		{
			//alert("Please enter a question less than 30 characters");
			setErrorMessage(true);
			return false;
		}
		
		alert("Question submitted"); 
	}
	

	return (
		<div>
			{/*basic html form*/}
			<h1>Ask a Question</h1>
			<input 
				className="form-control"
				ref = {textInput}
				onChange = {handleChange}
				name = "question"
				type="text" 
				placeholder="Type your question here"
			/>
			{
				showNext && 
			// button is displayed only if ques.len >= 5 
				<button
					className="btn"
					onClick = {handleSubmit}
					type='button'>
						Next
					</button>
				}

			{
				errorMessage && 
				<div className="error">
					Please enter a question less than 30 characters
				</div>
			}
		</div>
	);
}

export default Initial;