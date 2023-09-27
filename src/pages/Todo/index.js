import React, { useState, useEffect } from "react";
import TodoHeader from "../../components/TodoHeader";
import TodoList from "../../components/TodoList";
import TodoFooter from "../../components/TodoFooter";
import { TODOS } from "../../data/todo";
import "./style.css";
function Todo() {
  const [todos, setTodos] = useState(TODOS);
  const [filteredTodos, setFilteredTodos] = useState(TODOS);
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

  return (
    <div className="todo-page">
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
  );
}

export default Todo;
