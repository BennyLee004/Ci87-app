import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function TodoHeader({addTodo}) {
  const [text, setText] = useState("");
  
  const handleAddTodo = (event) => {
    if (event.key === "Enter" && text) {
      const newTodo = {
        id: uuidv4(),
        text: text,
        isCompleted: false,
      }
      addTodo(newTodo)
      setText("")
    }
  }
  return (
    <div className="todoheader">
      <input
        placeholder="Enter your task here ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleAddTodo}
      />
    </div>
  );
}

export default TodoHeader;
