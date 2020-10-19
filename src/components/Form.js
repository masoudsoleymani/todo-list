import React from 'react';
import  uuidv4  from 'uuid/v4';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHAndler = (e) => {
        e.preventDefault();
        setTodos([ 
            ...todos, 
            {text: inputText, completed: false, id: uuidv4() }]);
            setInputText('');
    };

    const statushandler = (e) => {
        setStatus(e.target.value);
    }

    return(
      <form>
        <input 
        value={inputText} 
        onChange= {inputTextHandler} 
        type="text" 
        className="todo-input" 
        placeholder= "What needs to be done"
        />
        <button onClick= {submitTodoHAndler} className="todo-button" type="submit">
          Add
        </button>

        <div className="select">
          <select onChange={statushandler} name="todos" >
            <option value="all">All</option>
            <option  value="uncompleted">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </form>
    );
}

export default Form;