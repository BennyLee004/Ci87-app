import React, { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import * as Icon from "react-feather";

function TodoHeader({ addTodo }) {
  const [text, setText] = useState("");
  const [add, setAdd] = useState(true);

  const [estPomodoros, setEstPomodoros] = useState(0);

  const handleCLickSave = () => {
    if (text !== "") {
      const newTodo = {
        id: uuidv4(),
        text: text,
        isCompleted: false,
        estPomodoros: estPomodoros,
      };
      addTodo(newTodo);
      setText("");
      setAdd(!add);
    }
  };
  return (
    <div className="todo-header">
      {add ? (
        <div className="btn-click-add-todo" onClick={() => setAdd(!add)}>
          <Icon.PlusCircle color="#EED9D9" size={"1.2em"} />
          <span>Add Task</span>
        </div>
      ) : (
        <div>
          <div className="btn-add-todo">
            <input
              placeholder="What are you working on?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <br />
            <span>Est Pomodoros</span>
            <div className="btn-incre-descre">
              <input
                type="number"
                value={estPomodoros}
                className="type-text-todo"
              />
              <button onClick={() => setEstPomodoros(estPomodoros + 1)}>
                <Icon.ChevronUp color="#757575" size={20} />
              </button>
              <button
                onClick={() =>
                  estPomodoros > 0
                    ? setEstPomodoros(estPomodoros - 1)
                    : estPomodoros
                }
              >
                <Icon.ChevronDown color="#757575" size={20} />
              </button>
            </div>
          </div>
          <div className="btn-cancel-save">
            <button onClick={() => setAdd(!add)}>Cancel</button>
            <button onClick={handleCLickSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoHeader;
