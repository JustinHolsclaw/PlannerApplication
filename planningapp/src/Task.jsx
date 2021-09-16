
function Task(Todo){
    const todoList = Todo
    
    return(
        <>
            <div className="row">
                <h1>{todoList.title}</h1>
                <h2>{todoList.date}</h2>
                <h2>{todoList.time}</h2>
            </div>
        </>
    );
}

export default Task;