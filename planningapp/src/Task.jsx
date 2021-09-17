import { useCallback, useState } from "react";
import EditForm from "./EditForm";

function Task(props){
    const [isEditing, setIsEditing] = useState(false)
    return(
        <>
            <div className="row border border-secondary">
                <div className="col" colspan="2">
                    <h1>{props.title}</h1>  
                    <h3>{props.date}</h3>
                    <h3>{props.time}</h3>
                </div>
                <div className="col">
                {isEditing
                    && <EditForm   post={props.post}></EditForm>
                }
                {!isEditing && <button type="button" id={props.title} onClick={props.updateTask} className="btn btn-warning btn-lg">✏</button>}
                </div>
                <button className="col btn btn-danger" id={props.title} onClick={props.deleteTask}>❌</button>
            </div>
        </>
    );
}

export default Task;