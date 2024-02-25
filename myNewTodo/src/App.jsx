import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddSection from './components/AddSection'
import { TodoContextProvider } from './context/TodoContext'

function App() {
  const [count, setCount] = useState(0)
  const [todos , setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev)=>[{id:Date.now , ...todo} , ...prev ])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>  prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }

  return (
    <TodoContextProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
      <div className='min-h-screen h-full bg-slate-600 text-white flex justify-center items-center'>
        <AddSection />
      </div>
    </TodoContextProvider>
  )
}

export default App
