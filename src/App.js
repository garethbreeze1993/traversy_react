import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
	state={
		todos: [
		{
			id:1,
			title: 'Take out the trash',
			completed: false
		},
		{
			id:2,
			title: 'Dinner with friends',
			completed: false
		},
		{
			id:3,
			title: 'Go to work',
			completed: false
		},
		]
	}
	// Toggle Complete
	// Pass in array and then use map to loop through each one and check if id matches clicked id toggle the completed to true or false
	markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })})
    }
    
    // Delete Todo
    // THis function takes in our todos array and using spread operator because in theory we dont know how many ones we have
    // then we create new array via filter method where the id is not equal to our clicked id
    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    } 
	
	render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo} />
    </div>
  );
}
}

export default App;
// this.foo is a method in the componnent similar to self.foo in python
