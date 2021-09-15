import Task from "./Task";

function Todo(props){
const todo = props.todolist
    return(
        <>
            {
                todo.map(element => {
                    return( 
                            <div>
                                <Task title={element.Title} description="this is a task"/>
                            </div>
                    )}
                )
            }
        </>
    )
}
export default Todo;