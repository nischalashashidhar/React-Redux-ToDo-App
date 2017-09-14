import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/action';

function addToDo(state=[], action) {
    switch(action.type) {
        case ADD_TODO: 
        let newState = Object.assign([], state);
        newState.push({id: action.id,text: action.text});
        return newState;
        default:
        return state;
    }
}



export default addToDo;