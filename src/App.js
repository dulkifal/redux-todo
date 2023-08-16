import React, { useState } from "react";
import "./App.css";

function App() {

 
  const [toDos, setToDos] = useState([
    { text: "Learn about React", complete: false },
    { text: "Meet friend for lunch", complete: false },
  ]);
  const [toDo, setToDo] = useState("");

  // create  a function to add a to do
  const addToDo = (e) => {
    e.preventDefault();
    setToDos([...toDos, { text: toDo, complete: false }]);
  };
  const completeToDo = (index) => {
    const newToDos = [...toDos];
    newToDos[index].complete = !newToDos[index].complete  ;
    setToDos(newToDos);
  };
  const removeToDo = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> To Do List </h1>
        <form className="form">
          <input
            type="text"
            placeholder="Add a to do "
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button onClick={(e) => addToDo(e)} type="submit">
            Add
          </button>
        </form>

        <div className="todo-list">
          {toDos.map((toDo, index) => (
            <div className="todos">
              <li key={index} className={toDo.complete ? 'completed': ''}>
                <span> 

                {toDo.text}
                </span>
              </li>
              <button onClick={(e)=>{
                e.preventDefault();
                completeToDo(index);
              }}> {toDo.complete ? 'to-do': 'done'} </button>
              <button onClick={(e)=>{
                e.preventDefault();
                removeToDo (index);
              }} >Remove</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
