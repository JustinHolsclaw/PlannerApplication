import { useState } from 'react';

function AddNewTask(props){
const [filteredTodoList, setFilteredTodoList] = useState(props.todolist)
const [taskTitle, setTaskToAdd] = useState('')
const [recievedTime, setRecievedTime] = useState('')
const [receivedDate, setReceivedDate] = useState('')

const handleAddTask= (e) =>{
    setTaskToAdd(e.target.value);
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
    const newTask=[{
        "Title": taskTitle,
        "Date": receivedDate,
        "Time": recievedTime
    }]
    const concatedList = props.todolist.concat(newTask)
    setFilteredTodoList(concatedList)
    props.handleAddTask(filteredTodoList)
}

    return(
        <>
            <input type="text"  placeholder="ex. go to the store" value={taskTitle} onChange={handleAddTask}/>
            <input type="date" value={receivedDate} onChange={handleDateChange}/>
            <input type="time" value={recievedTime} onChange={handleTimeChange}/>
            <button type="button" className='btn btn-secondary' onClick={addNewTask}>Add new Task</button>  
        </>
    );
}

export default AddNewTask;