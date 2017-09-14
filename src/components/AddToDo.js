import React, { Component, PropTypes } from 'react'

export default class AddToDo extends Component {
   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />
				
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
				
         </div>
      )
   }

   handleClick(e) {
      this.props.onAddClick(this.refs.input.value)
   }
}

// AddToDo.prototype = {
//     onAddClick : PropTypes.func
// }