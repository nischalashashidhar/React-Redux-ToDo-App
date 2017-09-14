import React, { Component, PropTypes } from 'react';
import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';
import addToDo from '../actions/action'

import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
    this.onAddClick = this.onAddClick.bind(this)
  }

  onAddClick(text) {
    const {dispatch} = this.props
    dispatch(addToDo(text));
  }

  render() {
    return (
      <div className="App">
        <AddToDo onAddClick={this.onAddClick}/>
        <ToDoList  toDoAdded= {this.props.toDoAdded}/> 
      </div>
    );
  }
}

App.propTypes = {
  toDoAdded: PropTypes.array,
  dispatch : PropTypes.func
};

function mapStateToProps(state) {
  return {
    toDoAdded: state.addToDo
  }
}

export default connect(mapStateToProps)(App);