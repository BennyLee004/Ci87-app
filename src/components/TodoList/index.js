import React from 'react'
import Todo from '../Todo'
function TodoList() {
  return (
    <div className='todo-list'>
        <Todo todo={"Clean up bedroom"}/>
        <Todo todo={"Make coffee"}/>
    </div>
  )
}

export default TodoList