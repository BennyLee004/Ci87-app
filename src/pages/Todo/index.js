import TodoList from "../../components/TodoList";
import TodoHeader from "../../components/TodoHeader";
import TodoFooter from "../../components/TodoFooter";
import { TODOS } from "../../data/todo";
function Pages() {
  const countTodoLeft = () => TODOS.filter((todo) => !todo.isCompleted).length;
  return (
    <div className="todo-page">
      <TodoHeader />
      <TodoList todos={TODOS} />
      <TodoFooter todoLeft={countTodoLeft()}/>
    </div>
  );
}

export default Pages;
