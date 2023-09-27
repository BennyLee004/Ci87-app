import React, { useState } from "react";
import * as Icon from "react-feather";
import "./style.css";
function Todo({ todo, handleChangeState, editTodo, handleDeletedTodo }) {
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [text, setText] = useState(todo.text);

  const { isCompleted, id, estPomodoros } = todo;
  const todoTextClass = `todo-text ${isCompleted && "todo-text-completed"}`;
  const iconClass = !isCompleted ? (
    <Icon.Circle color="grey" opacity={0.5} size={22} />
  ) : (
    <Icon.CheckCircle color="#BA4849" size={22} />
  );

  const handleEditTodo = (event) => {
    if (event.key === "Enter" && text) {
      editTodo(id, text);
      setIsEditTodo(!isEditTodo);
    }
  };
  const handleTodo = () => {
    setIsEditTodo(!isEditTodo);
  };
  return (
    <div className="todo-m">
      <div>
        <span color="grey" size={22} onClick={() => handleChangeState(id)}>
          {iconClass}
        </span>
        {isEditTodo ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleEditTodo}
          />
        ) : (
          <label className={todoTextClass} onDoubleClick={handleTodo}>
            {text}
          </label>
        )}
      </div>
      <div>
        <span>
          {estPomodoros}
          <span>/0</span>
        </span>
        <button onClick={() => handleDeletedTodo(id)}>
          <Icon.MoreVertical color="grey" size={18} />
        </button>
      </div>
    </div>
  );
}

export default Todo;
