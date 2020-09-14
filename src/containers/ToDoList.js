import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({todos, toggleTodo}) => {
    return(
        <ul>
            {todos.map((todo) => (
                <ToDo text={todo.text} key={todo.id} onClick={() => toggleTodo(todo.id)} completed={todo.completed}/>
            ))}
        </ul>
    )
}


export default ToDoList;