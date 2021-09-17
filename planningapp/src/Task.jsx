import React from "react";
import ReactDOM from 'react-dom';
import { useCallback, useState } from "react";
import EditForm from "./EditForm";

/*const updateTaskForm = (props) =>
    
 {return(
    <React.Fragment>
        ReactDOM.createPortal(
            <EditForm onClick={props.updateTask}/>,
        document.getElementById('backdrop-root')
                            )   
    </React.Fragment>
)
}*/

function Task(props){
    return(
        <>
            <div className="row border border-secondary">
                <div className="col" colspan="2">
                    <h1>{props.title}</h1>  
                    <h3>{props.date}</h3>
                    <h3>{props.time}</h3>
                </div>
                <div className="col">
               
                <button type="button" id={props.title} /*onClick={updateTaskForm}*/  className="btn btn-warning btn-lg">✏</button>
                </div>
                <button className="col btn btn-danger" id={props.title} onClick={props.deleteTask}>❌</button>
            </div>
        </>
    );
}

export default Task;