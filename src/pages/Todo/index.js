import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ThemeContext from "../../contexts/ThemeContext";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { TODOS } from "../../data/todo";

import "./style.css";
function Todo() {
  // const [data, setData] = useState(TODOS);
  // const [todos, setTodos] = useState(TODOS);

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axios.get(
        "https://6516937509e3260018c9f2a4.mockapi.io/task");
    
      setTodos(response.data);
      setFilteredTodos(response.data)
    };
    fetchTodo();  
  }, []);

  const unfinished = () => todos.filter((todo) => !todo.isCompleted).length;

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleChangeState = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const addTodo = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const editTodo = (id, text) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterByStatus = (status) => {
    if (status === "active") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
    } else if (status === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
    } else {
      setFilteredTodos(todos);
    }
  };

  const handleDeletedTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const themeContext = useContext(ThemeContext);
  const todoPageClassName = `handle-theme-todo ${
    themeContext.theme === "light"
      ? "handle-theme-todo-page--pink"
      : "handle-theme-todo-page--dark"
  }`;
  return (
    <div className={todoPageClassName}>
      <div className="reponsive-todo-page">
        <TodoList
          todos={filteredTodos}
          handleChangeState={handleChangeState}
          editTodo={editTodo}
          handleDeletedTodo={handleDeletedTodo}
          handleFilterByStatus={handleFilterByStatus}
        />
        <TodoHeader addTodo={addTodo} />
        <TodoFooter unfinished={unfinished()} />
      </div>
    </div>
  );
}

export default Todo;
