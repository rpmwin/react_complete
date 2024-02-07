import { useState } from 'react';

import './App.css';

function App() {
  const [color, setColor] = useState('');

  return (
    <div
      className="min-h-screen bg-slate-700 flex  items-center text-white flex-col justify-between"
      style={{ backgroundColor: color,}}
    >
      <div className="p-4 m-3 bg-slate-800 rounded-lg">
        {' '}
        this is a Background changer
      </div>

      <div className="flex text-black ">
        <div className="m-3 p-3 bg-red-600 rounded-lg opacity-100">
          <button onClick={() => setColor('red')} >red</button>
        </div>
        <div className="m-3 p-3 bg-yellow-500 rounded-lg">
          <button onClick={() => setColor('yellow')}>yellow</button>
        </div>
        <div className="m-3 p-3 bg-green-600 rounded-lg">
          <button onClick={() => setColor('green')}>green</button>
        </div>
      </div>
    </div>
  );
}

export default App;
