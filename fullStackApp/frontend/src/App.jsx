import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-screen w-full min-h-screen h-full bg-slate-800 flex justify-center items-center text-3xl text-white'>
      hello world
      <button>click</button>
    </div>
  )
}

export default App
