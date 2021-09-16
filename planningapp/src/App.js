import './App.css';
import Todo from './Todo';
import TodoList from './Todolist';
import 'bootstrap/scss/bootstrap.scss';

function App() {
  return (
   <>
    <Todo todolist = {TodoList}/>
   </>
  );
}

export default App;
