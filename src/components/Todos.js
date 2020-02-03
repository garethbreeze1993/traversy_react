import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
   
	render(){
  return this.props.todos.map((todo) => (
      < TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} 
      delTodo={this.props.delTodo} />
));
}
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;

// in return on render method pass this.props.todos which is whole array then use the map method to loop through each one 
//get a key via the id so you can identify each one set a prop like markComplete to pass it up the chain to define functions to change state
