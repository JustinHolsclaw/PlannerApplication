
function Task(task){
    
    
    return(
        <>
            <div className="row">
                <h1>{task.title}</h1>
                <h2>{task.description}</h2>
            </div>
        </>
    );
}

export default Task;