
function Task(props){
    
    return(
        <>
            <div className="row border border-secondary">
                <div className="col" colspan="2">
                    <h1>{props.title}</h1>  
                    <h3>{props.date}</h3>
                    <h3>{props.time}</h3>
                </div>
                <button type="button" className="col btn btn-warning">✏</button>
                <button className="col btn btn-danger" id={props.title} onClick={props.deleteTask}>❌</button>
            </div>
        </>
    );
}

export default Task;