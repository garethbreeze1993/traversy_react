import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/headers';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
	state={
		todos: [
		{
			id:uuid.v4(),
			title: 'Take out the trash',
			completed: false
		},
		{
			id:uuid.v4(),
			title: 'Dinner with friends',
			completed: false
		},
		{
			id:uuid.v4(),
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
    
    //Add Todo
 // THis function gets passed up the title and then we create new todo and then using setState method we coppy array and add the new one we created on to the end   
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]});
    }
	
	render(){
  return (
    <div className="App">
    <div className='container'>
    <Header />
    < AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo} />
      </div>
    </div>
  );
}
}

export default App;
// this.foo is a method in the componnent similar to self.foo in python
