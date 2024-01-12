import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='h-screen w-full  overflow-auto bg-cover   bg-slate-700 flex justify-center items-center text-white'>
      
        <Todo />
      
    </div>
  );
}

export default App;
