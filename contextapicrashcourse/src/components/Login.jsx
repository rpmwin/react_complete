import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>LOGIN: </h2>
        <input 
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input 
        type="text" 
        placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}
        value={password}/>
        
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
