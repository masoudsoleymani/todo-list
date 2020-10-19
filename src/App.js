import React, {useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

//for display date and time
let today = new Date();
let todaydate = today.toLocaleDateString("en-US", {weekday: "long", month: "short", day:"numeric"});



function App() {

  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState ([]);

  useEffect (() => {
    getLocalTodos();
  }, []);
  
  //Use Effect
  useEffect(() =>{
    filterHandler();
    saveLocalTodo();
  }, [todos, status]);

  //Function
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodo = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () =>{
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div>
      <div className="appheader">
        <header>
            <h1><i className="fas fa-tasks "></i> Masoud's Todo List</h1>
            <h3>{todaydate} </h3>
        </header>
        <Form 
          inputText={inputText} 
          todos= {todos} 
          setTodos= {setTodos} 
          setInputText = {setInputText} 
          setStatus = {setStatus}   />
        <TodoList 
          filteredTodos = {filteredTodos}
          setTodos={setTodos} 
          todos= {todos}  />
      </div>
      <footer>
        <p className="copyright">
            Copyright &copy; 2020. All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
