import './App.css';
import { useState } from 'react';
import Todo from './Todo';
import 'bootstrap/scss/bootstrap.scss';
import AddNewTask from './AddNewTask'

let TodoList =[
  {
      "Title": "Do The Thing",
      "Date": "9/14/21",
      "Time": "19:00"
  },
  {
      "Title": "Do the Other Thing",
      "Date": "9/14/21",
      "Time": "13:25"
  },
]

const [updateableTodoList, setUpdateableTodoList] = useState(TodoList)

const handleAddTask = (newTask) => {
    TodoList = TodoList.concat(newTask)
    setUpdateableTodoList(TodoList)
}

function App() {

  return (
   <>
    <Todo todolist = {TodoList}/>
    <AddNewTask todolist = {TodoList} handleAddTask={handleAddTask}/>
   </>
  );
}

export default App;
