import './App.css';
import React from 'react';
import Todo from './Todo';
import 'bootstrap/scss/bootstrap.scss';


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
  {
    "Title": "Do Stuff",
    "Date": "9/14/21",
    "Time": "13:25"
  },
]

const handleAddTask = (newTask) => {
    TodoList = newTask
    console.log(TodoList)
}

function App() {

  return (
   <>
    <Todo todolist={TodoList} handleNewTask={handleAddTask}/>
   </>
  );
}

export default App;
