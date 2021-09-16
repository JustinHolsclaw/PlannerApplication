import { useState } from "react";
import Task from "./Task";
const bootstrap = require('bootstrap')


function Todo(props){
const [todoList, setTodolist] = useState(props.todolist)
const [filteredTodoList, setFilteredTodoList] = useState(props.todolist)
const addNewTask = () =>{
    
}
    return(
        <>
        <div className="container-fluid">
            <input type="text" className="form-control" placeholder="ex. go to the store" />
            <input type="time" className="form-control"/>
            <button type="button" className='btn btn-secondary' onClick={addNewTask}>Add new Task</button>    
        </div>
            {
                todoList.map(element => {
                    return( 
                            <>
                                <Task title={element.Title} description="this is a task"/>
                            </>
                    )}
                )
            }
        </>
    )
}
export default Todo;