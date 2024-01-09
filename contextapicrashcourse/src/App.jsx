import { useState } from 'react'

import './App.css'
import { Provider } from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider>
     <h1>React with Context-API</h1>
     <Login />
     <Profile />
    </Provider>
  )
}

export default App
