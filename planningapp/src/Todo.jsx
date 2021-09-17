import { useState } from "react";
import Task from "./Task";
import styles from "../src/styles/Todo.module.scss"
const bootstrap = require('bootstrap')

function Todo(props){
const [todoList, setTodoList] = useState(props.todolist)
const [taskTitle, setTaskTitle] = useState('')
const [recievedTime, setRecievedTime] = useState('')
const [receivedDate, setReceivedDate] = useState('')
const [isTitleNull, setIsTitleNull] = useState(false)

const handleAddTask= (e) =>{
    setTaskTitle(e.target.value);
    setIsTitleNull(false)
}
const handleDateChange = (e) => {
    setReceivedDate(e.target.value)
}
const handleTimeChange = (e) =>{
    setRecievedTime(e.target.value)
}

const checkDate = () =>{
    if (receivedDate === ''){
        const currentDate = new Date().toLocaleString()
        setReceivedDate(currentDate)
    }
    else{
        setReceivedDate(receivedDate)
    }
}

const addNewTask = () =>{
    checkDate();
    if(taskTitle.trim().length == 0){
        setIsTitleNull(true)
        return
    }
    const newTask=[{
        "Title": taskTitle,
        "Date": receivedDate,
        "Time": recievedTime
    },]
    console.log(newTask)
    let concatedList = todoList
    concatedList = concatedList.concat(newTask)
    setTodoList(concatedList)
    props.handleNewTask(concatedList)
}

const [taskToBeDeleted, setTaskToBeDeleted] = useState('')
const deleteTask = (evt) => {
    setTaskToBeDeleted(evt.target.id)
    let newTodoList = todoList
    for( var i = 0; i < todoList.length; i++){ 
        if(todoList[i].Title === evt.target.id){
            newTodoList.splice(i, 1)
        }
    }
    SetNewTodo(newTodoList)    
}


function SetNewTodo(task){
    setTodoList(task)
}


    return(
        <>  
            <div className={styles.filterContainer, "row"}>
                <label className={styles.taskLabel}>Task</label>
                <input type="text" className={ `${styles.taskTitle} ${isTitleNull && styles.taskTitleNull} col`}  placeholder="ex. go to the store" value={taskTitle} onChange={handleAddTask}/>
                <input type="date" className={styles.date, "col"} value={receivedDate} onChange={handleDateChange}/>
                <input type="time" className={styles.time,"col"} value={recievedTime} onChange={handleTimeChange}/>
                <button type="button" className={styles.newTaskBtn, 'btn btn-secondary'} onClick={addNewTask}>Add new Task</button>
            </div>
            <div className="">
            {
                todoList.map(element => {
                    return( 
                            <>
                                <Task title={element.Title} date={element.Date} time={element.Time} deleteTask={deleteTask} taskToBeDeleted={taskToBeDeleted}/>
                            </>
                    )}
                )
            }
            </div>
        </>
    )
}
export default Todo;