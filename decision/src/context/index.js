import React,{Component} from "react";

const MyContext = React.createContext();
class MyProvider extends Component{
	render(){
		return(
			<>
				<MyContext.Provider value="Hello World">
					{this.props.children}
				</MyContext.Provider>
			</>
		)
	}
	
}