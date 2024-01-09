import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CurrencyExchange from "./components/CurrencyExchange";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [value, setValue] = useState(10);
  const [currency, setCurrency] = useState(0);

  // variables for css
  const readOnly = "true";

  function convert() {
    // Validate if amount and value are valid numbers
    if (!isNaN(amount) && !isNaN(value)) {
      // If converting from "From" currency
      if (from !== to) {
        const convertedCurrency = amount * value;
        setCurrency(convertedCurrency);
        console.log(convertedCurrency);
      } else {
        // If converting to the same currency, set the amount directly
        setCurrency(amount);
      }
    }
  }

  return (
    <>
      <div className="bg-gray-700 w-screen h-screen flex flex-col justify-center items-center gap-2">
      <CurrencyExchange
  label={"From"}
  newCurrency={(e) => setAmount(e)}
  ToCountry={to}
  whichCountry={(e) => setFrom(e)}
  FromCountry={to}
  howmuchValue={(e) => setValue(e)} // Correct function should be passed here
/>


        <button className="bg-orange-500 p-2 rounded-md" onClick={convert}>
          convert
        </button>

        <CurrencyExchange
          label={"To"}
          readonly={readOnly}
          currency={currency}
          whichCountry={(e) => {
            setTo(e);
          }}
        />
        {console.log("from country", from)}
        {console.log("To country", to)}
        {console.log("currency exchange rate:", value)}
      </div>
    </>
  );
}

export default App;
