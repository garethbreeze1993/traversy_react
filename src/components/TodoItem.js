import React, { Component } from 'react';
import PropTypes from 'prop-types';

const btnStyle = {
    background: '#ff000',
    color: 'red',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through': 'none'
            // above if the todo passed in is completed put a line through else dont do it
        }
    }
    
	render(){
        const { id, title } = this.props.todo;
        //this means we get the todo from it being passed down via props and we can get the variables id and title from each one
        // so dont have to write out this.props.todo.id for example
  return (
      <div style={this.getStyle()}>
      <p><input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {' '}
     { title }
     <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
     </p>
     </div>
)
}
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

// this.props.blabla.bind means we can send the id up the chain so we can use the id clicked in the relevent function in app.js

export default TodoItem;
