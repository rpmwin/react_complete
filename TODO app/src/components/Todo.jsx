import React, { useState } from 'react';
import NewLine from './NewLine';

function Todo() {
  const [inputHeader, setInputHeader] = useState('');
  const [newLineComponent, setNewLineComponent] = useState([]);

  const handleInputChange = (e) => {
    setInputHeader(e.target.value);
  };

  const handleADD = () => {
    console.log(inputHeader);
    setInputHeader('');
    setNewLineComponent((prev) => [
      ...prev,
      <NewLine inputHeader={inputHeader} />,
    ]);
  };

  return (
    <div className="w-1/2 flex flex-col">
      <div className="flex">
        <input
          type="text"
          className="flex-grow rounded-xl m-3 p-5 border font-bold text-3xl text-black border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
          placeholder="Type something..."
          value={inputHeader}
          onChange={handleInputChange}
        />
        <button
          className="m-3 p-4 text-3xl bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 ease-in-out"
          onClick={handleADD}
        >
          ADD
        </button>
      </div>
      {newLineComponent.map((comp, index) => (
        <div key={index}>{comp}</div>
      ))}
    </div>
  );
}

export default Todo;
