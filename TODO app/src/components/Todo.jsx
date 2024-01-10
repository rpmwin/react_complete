import React from 'react'

function Todo() {
  return (
    <div className='w-screen  h-screen  bg-blue-950 flex flex-col justify-center items-center'>
        <div className='w-3/5  relative top-40  text-xl font-bold rounded-l-3xl    '>
            <input type="text" className='w-11/12  h-12  rounded-l-3xl' />
            <button className='w-1/12 bg-green-500  min-h-12'> ADD </button>
            
        </div>
        
    </div>
  )
}

export default Todo
