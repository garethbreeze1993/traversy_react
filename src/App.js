import React, { Component } from 'react';
import './App.css';
import About from './components/pages/About';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/headers';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
//import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
	state={
		todos: []
	}
	
	// GET request to get todos from API
	// componentDidMount runs after component as loaded 
	componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({todos: res.data}))
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
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
        
    } 
    
    //Add Todo
 // THis function gets passed up the title and then we create new todo and then using setState method we coppy array and add the new one we created on to the end   
    addTodo = (title) => {
       axios.post('https://jsonplaceholder.typicode.com/todos', {
           title,
           completed: false
    })
       .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    }
	
	render(){
  return (
    <Router>  
    <div className="App">
    <div className='container'>
    <Header />
    <Route exact path='/' render={props => (
        <React.Fragment>
        < AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo} />
        </React.Fragment>
    )}/>
    <Route path='/about' component={About} />
      </div>
    </div>
    </Router>
  );
}
}

export default App;
// this.foo is a method in the componnent similar to self.foo in python
