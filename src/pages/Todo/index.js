import TodoList from "../../components/TodoList";
import TodoHeader from "../../components/TodoHeader";
import TodoFooter from "../../components/TodoFooter";
import { TODOS } from "../../data/todo";
import { useState } from "react";
function Pages() {
  const [todos, setTodos] = useState(TODOS);

  const countTodoLeft = () => todos.filter((todo) => !todo.isCompleted).length;
  const handleChangeStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
          // console.log(todo)
        }
        return todo;
      })
    );
    // console.log(id)
  };
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo])
  }

  const editTodo = (id, text) => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodo)
  }
  return (
    <div className="todo-page">
      <TodoHeader
        addTodo={addTodo} 
      />
      <TodoList 
        todos={todos} 
        handleChangeStatus={handleChangeStatus}
        editTodo={editTodo}
      />
      <TodoFooter todoLeft={countTodoLeft()} />
    </div>
  );
}

export default Pages;
