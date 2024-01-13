import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./components/Tours";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-full min-h-screen bg-[#7077A1] text-white flex flex-col justify-center items-center overflow-x-hidden">
      <h1>PLAN WITH ME</h1>
      <Tours />
    </div>
  );
}

export default App;
