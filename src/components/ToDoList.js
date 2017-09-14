import React, { Component, PropTypes } from 'react'
import ToDo from './ToDo'

export default class ToDoList extends Component {
   render() {
       
      return (
         <ul>
            {this.props.toDoAdded.map(todo =>
               <ToDo key={todo.id} {...todo}/>
            )}      
         </ul>
      )
   }
}

ToDoList.propTypes={
    toDoAdded : PropTypes.array
}