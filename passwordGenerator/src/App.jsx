import { useState, useCallback, useId, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumber] = useState(false);
  const [charAllowed, setchar] = useState(false);
  const [password, setpassword] = useState("");
  const passwordref = useRef(null);
  // let allNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   let allLetters = {
  //     1: 'A',
  //     2: 'B',
  //     3: 'C',
  //     4: 'D',
  //     5: 'E',
  //     6: 'F',
  //     7: 'G',
  //     8: 'H',
  //     9: 'I',
  //     10: 'J',
  //     11: 'K',
  //     12: 'L',
  //     13: 'M',
  //     14: 'N',
  //     15: 'O',
  //     16: 'P',
  //     17: 'Q',
  //     18: 'R',
  //     19: 'S',
  //     20: 'T',
  //     21: 'U',
  //     22: 'V',
  //     23: 'W',
  //     24: 'X',
  //     25: 'Y',
  //     26: 'Z',
  // };

  // // Generate a random number between 1 and 26
  // let randomNumber = Math.floor(Math.random() * 26) + 1;

  // // Convert the number to a string and access the letter using dot notation
  // let randomLetter = allLetters[randomNumber.toString()];

  // console.log(randomLetter);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let newPassword = "";
    if (charAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "1234567890";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      newPassword += str[index];
      console.log(newPassword);
    }
    setpassword(newPassword);
  }, [length, numberAllowed, charAllowed]);
  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);
  function copyToClipboard (){
    window.navigator.clipboard.writeText(password);
    passwordref.current.select();
  }


  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="  flex flex-col items-center bg-slate-400 rounded-2xl h-min p-4">
          <h1 className="text-4xl">Password-Generator</h1>
          <br />
          <div className=" bg-blue-600  flex  rounded-2xl">
            <input
              type="text"
              name="passwordArea"
              id="passwordArea"
              className=" h-10 pl-3 w-4/5 outline-none text-2xl rounded-2xl"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordref}
            />
            <button className=" bg-blue-600 text-xl px-2 rounded-2xl font-semibold   "
            onClick={copyToClipboard}>
              COPY
            </button>
          </div>

          <div className="w-full flex flex-col">
            <div>
              <input
                type="range"
                name="ranger"
                min={5}
                max={15}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                id="passwordLength"
                className=" w-2/4"
              />

              <label htmlFor="ranger">length: {length}</label>
            </div>
            <div>
              <label htmlFor="capital">Include Capital letters: </label>
              <input
                type="checkbox"
                name="capital"
                id="capital"
                defaultChecked={charAllowed}
                onChange={(e) => {
                  setchar((prev) => !prev);
                }}
              />
            </div>

            <div>
              <label htmlFor="number">Include numbers: </label>
              <input
                type="checkbox"
                name="number"
                id="number"
                defaultChecked={numberAllowed}
                onChange={(e) => {
                  setnumber((prev) => !prev);
                }}
              />
            </div>
            <input type="submit" value="submit" onClick={generatePassword} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
