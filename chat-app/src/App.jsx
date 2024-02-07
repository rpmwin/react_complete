import { useState } from 'react';

import { AiFillCheckCircle } from 'react-icons/ai';
import './App.css';
import  SocketIO  from 'socket.io-client';


const socket = SocketIO(ENDPOINT ,{
  transports:['websocket']
})

function App() {

  socket.on('connect',()=>{
    
  })

  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-800 text-white min-h-screen flex justify-center items-center ">
      hello
      <AiFillCheckCircle />
    </div>
  );
}

export default App;
