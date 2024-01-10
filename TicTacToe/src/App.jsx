import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState(false);
  const buttonsRef = useRef(Array(9).fill(null));

  const buttonStyle = `w-24 h-24 bg-slate-200  border-r-slate-800 border-r-4 border-b-4 border-b-slate-800  p-4 hover:bg-slate-600 hover:text-white transition duration-300 ease-in-out text-black`;

  const handleClick = (index) => {
    if (!buttonsRef.current[index].disabled && !winner) {
      buttonsRef.current[index].disabled = true;
      buttonsRef.current[index].innerText = player;
      setPlayer((prevPlayer) => (prevPlayer === "x" ? "o" : "x"));
      checkWinner();
    }
  };

  // ...

const checkWinner = () => {
  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (
      buttonsRef.current[a].innerText &&
      buttonsRef.current[a].innerText === buttonsRef.current[b].innerText &&
      buttonsRef.current[a].innerText === buttonsRef.current[c].innerText
    ) {
      setWinner(true);
      // You can update the UI or take further actions when a winner is found
      console.log("winner is : ",player);
      
      return;
    }
  }
  // console.log("winner is : ",player);

  // Check for a tie if all buttons are disabled and there is no winner
  const isTie = buttonsRef.current.every((button) => button.disabled);
  if (isTie) {
    displayTied();
  }
};

const displayTied = () => {
  alert("It's a tie!");
  // You can add more logic here if needed
};

// ...

  return (
    <div className="bg-gray-700 w-screen h-screen text-white  flex flex-col flex-wrap justify-center items-center">
      <h1 className="text-3xl p-8">TIC - TAC - TOE</h1>
      <h2>Player: {player}</h2>

      <div className="flex flex-col justify-around p-8 min-w-min  ">
        {Array.from({ length: 3 }).map((_, row) => (
          <div
            key={row}
            className="w-full  bg-yellow-200 text-5xl flex justify-between"
          >
            {Array.from({ length: 3 }).map((_, col) => {
              const index = row * 3 + col;
              return (
                <button
                  key={index}
                  ref={(el) => (buttonsRef.current[index] = el)}
                  className={`${buttonStyle} `}
                  onClick={() => handleClick(index)}
                ></button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
