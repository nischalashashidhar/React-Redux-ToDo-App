export const ADD_TODO = 'ADD_TODO';

let nextToDoId = 0;
export default function addToDo(text) {
    return {
        type: ADD_TODO,
        id: nextToDoId++,
        text
    }
}