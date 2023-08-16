import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, completeToDo, removeToDo } from "./actions";

function App() {
  const [toDo, setToDo] = useState("");
  const toDos = useSelector((state) => state.root.todoReducers.todos);
 
  const dispatch = useDispatch();
  
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
          <button onClick={(e) =>
          e.preventDefault() &
           dispatch(addToDo(toDo),
            setToDo("")
            )} type="submit">
            Add
          </button>

        </form>

        <div className="todo-list">
          {toDos.map((toDo) => (
          <div className="todos" key={toDo.id} >
              <li  className={toDo.isCompleted ? "completed" : ""}>
                <span>{toDo.data}</span>
              </li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(completeToDo(toDo.id));
                }}
              >
                {" "}
                {toDo.isCompleted ? "to-do" : "done"}{" "}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(removeToDo(toDo.id));
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;
