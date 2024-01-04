import { useState } from "react";

import "./App.css";

function App() {

  const  [counter, setCounter]= useState(15)


  // let counter = 15;

  const addvalue = () =>{
    // counter = counter + 1 ;
    // setCounter += 1 ;
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    console.log(counter);
  }
  const removevalue = () => {
    // counter = counter - 1;
    // setCounter--;
    // setCounter += 1 ;
    setCounter(counter - 1)
    console.log(counter);
  }

  return (
    <>
      <h1>Counter using React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button><br /><br /><br />
      <button onClick={removevalue}>remove value</button>
      <p>value: {counter}</p>
    </>
  );
}

export default App;
