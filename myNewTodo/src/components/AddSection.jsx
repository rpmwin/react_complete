import React, { useState } from 'react';

function AddSection() {

  const [todo, setTodo] = useState('');

  const onInputChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className='w-[50%]  h-12 rounded relative flex gap-2'>
      <input
        type="text"
        name="TodoInput"
        id="TodoInput"
        className='flex-grow rounded placeholder-gray-500 text-2xl p-3  font-medium'
        placeholder='Enter your TODO...'
        value={todo}
        onChange={onInputChange} 
      />
      <div className='w-1/12 h-[100%] bg-green-400 rounded text-center flex items-center justify-center font-medium text-black'>
        ADD
      </div>
    </div>
  );
}

export default AddSection;
