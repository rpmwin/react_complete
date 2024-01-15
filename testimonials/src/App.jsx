import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import reviews from './data'

function App() {
  const [index, setIndex] = useState(0)

  return (
    <div className='min-h-screen h-full min-w-screen bg-slate-300 flex justify-center items-center flex-col text-center '>
      <h1 className='text-4xl font-bold'> OUR Testimonials</h1>
      <div className='bg-violet-400 h-[4px] w-1/5 rounded-md mt-1 '></div>
      <Card data={reviews[index]} newIndex={setIndex} />
      </div>
  )
}

export default App
