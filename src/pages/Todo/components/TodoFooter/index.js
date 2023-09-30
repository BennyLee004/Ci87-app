import React from 'react'


function TodoFooter({unfinished}) {

  return (
    <div className='todo-footer'>
        <span>{unfinished} task left</span>

    </div>
  )
}

export default TodoFooter