import { useState, useRef } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const initialPlayer1 = "x";
  const initialPlayer2 = "o";

  const [player, setPlayer] = useState(initialPlayer1);
  const [player1, setPlayer1] = useState(initialPlayer1);
  const [player2, setPlayer2] = useState(initialPlayer2);
  const [playerName, setPlayerName] = useState(player1);
  const [winner, setWinner] = useState(false);

  const buttonsRef = useRef(Array(9).fill(null));

  useEffect(()=>{
    if (player === "x") {
      setPlayerName(player1.toUpperCase())
    } else {
      setPlayerName(player2.toUpperCase())
      
    }
  },[])
  useEffect(()=>{
    if (player === "x") {
      setPlayerName(player1.toUpperCase())
    } else {
      setPlayerName(player2.toUpperCase())
      
    }
  },[player,player1,player2])

  const buttonStyle = `w-24 h-24 bg-slate-200  border-r-slate-800 border-r-4 border-b-4 border-b-slate-800  p-4 hover:bg-slate-600 hover:text-white transition duration-300 ease-in-out text-black`;

   const handleClick =async (index) => {
    if (!buttonsRef.current[index].disabled && !winner) {
      buttonsRef.current[index].disabled = true;
      if (player === "x") {
        buttonsRef.current[index].innerText = player1[0].toUpperCase();
      } else {
        buttonsRef.current[index].innerText = player2[0].toUpperCase();
      }
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
      
      setTimeout(() => {
        if (player ==='x') {
          
          alert(`winner is : ${player1.toUpperCase()}`);
        }else{
          alert(`winner is : ${player2.toUpperCase()}`);

        }

      }, 100);
      
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
const handlePlayer = (e) => {
  const inputId = e.target.id;
  console.log(`Input ID: ${inputId}`);
  if (inputId === "player1") {
    setPlayer1(`${e.target.value}`)
  } else {
    setPlayer2(`${e.target.value}`) 
  }
}

// const handlePlayerName = (e) => {
//   if (player === 'x') {
//     e.target.innerText = player1;
//   } else {
//     e.target.innerText = player2;
//   }
// }


const handleReset = (e) =>
{
  // setPlayer(initialPlayer1);
  //   setPlayer1(initialPlayer1);
  //   setPlayer2(initialPlayer2);
  //   setPlayerName(initialPlayer1);
    setWinner(false);

    // Reset button states and text
    buttonsRef.current.forEach((button) => {
      button.disabled = false;
      button.innerText = "";
    });
}

// ...

  return (
    <div className="bg-gray-700 w-screen h-screen text-white  flex flex-col flex-wrap justify-center items-center">
      <h1 className="text-3xl p-8">TIC - TAC - TOE</h1>
      <div className="text-black bg-orange-800 p-8 rounded-3xl ">
        <label htmlFor="player1" className="text-white text-3xl ">Player 1 : </label>
        <input type="text"  id="player1" onChange={handlePlayer} className="text-3xl p-1 m-3 bg-slate-300" />
        
        <label htmlFor="player2" className="text-white text-3xl">Player 2 : </label>
        <input type="text"  id="player2" onChange={handlePlayer} className="text-3xl p-1 m-3 bg-slate-300"/>

      </div>
      <h2 className="text-white text-3xl">Player: {playerName}</h2>

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
     <button className=" bg-red-600 p-4 rounded-2xl" onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
