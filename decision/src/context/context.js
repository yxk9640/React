import React,{Component} from "react";

const answerList = [ 'Yes', 'No', 'Maybe', 'Ask again later', 'Not so good', 'Very doubtful' ];
const MyContext = React.createContext();
class MyProvider extends Component{
	
	
	state = {
		screen :0,
		question : '',
		result : ''
	};

	handleScreenChange = (screenVal) => {
		this.setState({screen:screenVal});
	}

	handleQuestionChange = (questionVal) => {
		this.setState({question:questionVal});
	}

	getRandom = () =>{
		return Math.floor(Math.random() * 6);

	}

	handleResultChange = () => {
		let resultVal = this.getRandom();
		if (this.state.result !== ''){
			while (resultVal === this.state.result){
				resultVal = this.getRandom();
			}
		}
		this.setState({result:answerList[resultVal]});
	}

	handleReset = () => {
		this.setState({
			screen:0,
			question:'',
			result:''
		});
	}


	render(){
		return(
			<>
				{/*data share across child should be defined*/}
				<MyContext.Provider 
					value={{
						state:this.state,
						handleScreenChange:this.handleScreenChange,
						handleQuestionChange:this.handleQuestionChange,
						result:this.handleResultChange,
						reset:this.handleReset
					}}
				
				>
					{this.props.children}
				</MyContext.Provider>
			</>
		)
	}
	
}

export {MyProvider,MyContext};

// above class as function
//function MyProvider2({children}) {
//	return (
//		<MyContext.Provider value="Hello World">
//			{children}
//		</MyContext.Provider>
//	)
//}