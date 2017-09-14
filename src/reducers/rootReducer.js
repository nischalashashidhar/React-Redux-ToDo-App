import { combineReducers } from 'redux';
import addToDo from './reducer';

const toDoApp = combineReducers({
    addToDo
});

export default toDoApp;