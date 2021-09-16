import { useState } from "react";
import Task from "./Task";
const bootstrap = require('bootstrap')


function Todo(props){
const [todoList, setTodolist] = useState(props.todolist)

    return(
        <>  
            {
                todoList.map(element => {
                    return( 
                            <>
                                <Task title={element.Title} date={element.Date} time={element.Time}/>
                            </>
                    )}
                )
            }
        </>
    )
}
export default Todo;