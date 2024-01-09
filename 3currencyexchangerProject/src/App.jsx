import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useInfo from './hooks/useInfo'
import CurrencyBox from './components/CurrencyBox'

function App() {
  const [count, setCount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(1);
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () =>{
    console.log(currencyInfo[to]);
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <>
     <div className='bg-gray-500 w-screen flex flex-col justify-center text-center  items-center h-screen'>
      <CurrencyBox 
      label ={"From"}
      options = {options}
      currency = {from}
      onCurrencyChange = {(e)=>{setFrom(e)}}
      
      onAmountChange = {(e)=>{setAmount(e)}}
      className={``}
      
      
      />
      {console.log(amount)}


      <button onClick={convert} className='bg-orange-400 p-4 m-3 rounded-xl text-3xl'>Convert</button>


      <CurrencyBox 
      label={"To"}
      options = {options}
      currency = {to}
      onCurrencyChange = {(e)=>{setTo(e)}}
      amount = {convertedAmount}
      readOnly = {true}
      />
        
         
     </div>
      
    </>
  )
}

export default App
