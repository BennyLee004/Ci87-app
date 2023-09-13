
import Todo from '../Todo'
function TodoList({todos}) {
    console.log(todos)
  return (
    <div className='todo-list'>
        {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />))}
    </div>
  )
}

export default TodoList