import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' text-3xl rounded-md p-3 bg-green-500'>Vite with tailwind</h1>
      <Card />
    </>
  )
}

export default App
