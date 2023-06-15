Steps for creating Decider App
1. Setup the environmnet:
	1. react environment - npm create, install, run
	2. Get bootstrap link and Font links
2. create components and inside those create containers 
		`const{same as function } <component_name> = () => {
		`return ( );`
		`}`
		`export default <component_name>;`
3. Connect the components by importing them.
		initial -> confirm -> result
4.  build initial component:
	1. create containers : Question, input feild and button
	2. Button is displayed only when input.len >= 5
		1. This is handled by state and event listener. where input.len will be event listener and state of button is changed. :Ref-??:
	state [<variable_to_update_state>, <function_hadling_condition_to_update_state_variable>]
	
5. Connect the components.
	1. Context, and hooks are  a way to share data among the components in a React project.
	2.  React standard way to create components is by 'class' we can also do using functions refer medium for clarification on which one to use.
	3. 