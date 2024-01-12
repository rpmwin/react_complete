import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value.toString());
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center">
      <div className="w-1/2 bg-gray-800 p-4 rounded-lg flex flex-col">
        <input
          type="text"
          value={input}
          className="w-full p-2 text-white bg-gray-700 border-none rounded-md"
          readOnly
        />
        <div className="flex ">
          <div className="grid grid-cols-4 gap-2 mt-2 w-1/8">
            {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."].map((num) => (
              <button
                key={num}
                onClick={() => handleButtonClick(num)}
                className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
              >
                {num}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {["+", "-", "*", "/"].map((operator) => (
              <button
                key={operator}
                onClick={() => handleButtonClick(operator)}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
              >
                {operator}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <button
            onClick={handleClear}
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-400"
          >
            C
          </button>
          <button
            onClick={handleCalculate}
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-400"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
