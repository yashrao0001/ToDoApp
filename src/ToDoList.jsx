import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import appLogo from "/icon.png";
import removeIcon from "/remove.png";
import "./ToDoList.css";
import unchecked from "../public/unchecked.png";
import checked from "../public/checked.png";

export default function ToDoList() {
  let [Todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };
  return (
    <div id="container">
      <div id="todo">
        <h2>
          ToDo App <img src={appLogo} alt="icon" />
        </h2>
        <div id="input">
          <input
            id="inp1"
            type="text"
            placeholder="Add your task"
            value={newTodo}
            onChange={(event) => {
              setNewTodo(event.target.value);
            }}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <hr />
        <br />
        <div id="listcontainer">
          <ul>
            {Todos.map((todo) => (
              <li
                key={todo.id}
                onClick={(e) => toggle(e)}
                style={{
                  backgroundImage: `url(${
                    e.target.classList.toggle("checked") ? checked : unchecked
                  })`,
                }}
              >
                <span>{todo.task}</span>
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(todo.id);
                  }}
                  src={removeIcon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
