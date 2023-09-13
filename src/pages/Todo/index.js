import TodoList from "../../components/TodoList";
import TodoHeader from "../../components/TodoHeader";
import TodoFooter from "../../components/TodoFooter";

function Pages() {
  return (
    <div className="todo-page">
        <TodoHeader/>
        <TodoList/>
        <TodoFooter/>
    </div>
  )
}

export default Pages