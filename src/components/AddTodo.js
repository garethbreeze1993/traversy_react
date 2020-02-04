import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ''
    }
    
  onSubmit = (e) => {
      e.preventDefault(); // stops it being submitted to file
      this.props.addTodo(this.state.title);
      this.setState({ title : '' });
}  
    
//On change updates the state of the add to do input to whatever we typed in using the e.target.value
//e.target.name will work for multiple fields depending on if the name attribute is the same as the state 
    onChange = (e) => this.setState( { [e.target.name]: e.target.value } );
    
    render(){
        return(
            <form onSubmit={this.onSubmit} style = {{ display: 'flex' }}>
            <input type='text' name='title' placeholder='Add Todo ...'
            style={{flex: '10', padding: '5px'}}
            value={this.state.title}
            onChange={this.onChange} />
            <input type='submit' value='submit' className='btn'
            style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
