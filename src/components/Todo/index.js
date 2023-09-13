import React from 'react'

function Todo({todo}) {
  return (
    <div className='todo'>
        <input type='radio'/>
        <label>{todo}</label>
    </div>
  )
}

export default Todo