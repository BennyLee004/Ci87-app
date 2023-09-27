
import Todo from "../Todo";
import "./style.css";
function TodoList({
  todos,
  handleChangeState,
  editTodo,
  handleDeletedTodo,
  handleFilterByStatus,
}) {
  console.log(todos);
  return (
    <div className="todo-list">
      <div>
        <p>Task</p>
        <select onChange={(event) => handleFilterByStatus(event.target.value)}>
          <option value={"all"}>All</option>
          <option value={"active"}>Active</option>
          <option value={"completed"}>Completed</option>
        </select>
      </div>
      <hr style={{ color: "white", marginBottom: "1em" }} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleChangeState={handleChangeState}
          editTodo={editTodo}
          handleDeletedTodo={handleDeletedTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
