
import "./style.css";
function Todo({todo}) {
    const {text, isCompleted} = todo
    const todoTextClass = `todo-text ${isCompleted && "todo-text-completed"}`
  return (
    <div className='todo'>
        <input type='radio' checked={isCompleted}/>
        <label className={todoTextClass}>{text}</label>
    </div>
  )
}

export default Todo 