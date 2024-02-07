import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState(0);
  const changeColor = (color) => {
    setColor(color)
  }

  return (
    <div className=" bg-slate-900 p-2 text-center flex flex-col   items-center w-screen h-screen overflow-clip "    style={{backgroundColor:color}} >
      <h1 className="bg-slate-500 text-5xl p-3 max-w-max h-min inline-block rounded-lg py-7 pt-3">
        A bg changer app with vite...
      </h1>
      <div className="w-full h-screen flex justify-center  duration-200">
        <div className="fixed bottom-3 max-w-max h-max flex gap-2">
          <div className="flex flex-wrap justify-center p-2 text-3xl rounded-md w-36 max-w-2xl text-black bg bg-green-600 hover:bg-green-800">
            <button onClick={()=>{
              changeColor('green')
            }}>green</button>
          </div>
          <button onClick={()=>{
              setColor('red')
            }}>
          <div className="flex flex-wrap justify-center p-2 text-3xl rounded-md w-36 max-w-2xl text-black bg bg-red-600 hover:bg-red-800">
            red
          </div>
          </button>
          <button onClick={()=>{
            setColor('yellow')
          }}>
          <div className="flex flex-wrap justify-center p-2 text-3xl rounded-md w-36 max-w-2xl text-black bg bg-yellow-600 hover:bg-yellow-800" >
            yellow
          </div>
          </button>
          <div className="flex flex-wrap justify-center p-2 text-3xl rounded-md w-36 max-w-2xl text-black bg bg-blue-600
          hover:bg-blue-800">
            <button>blue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
