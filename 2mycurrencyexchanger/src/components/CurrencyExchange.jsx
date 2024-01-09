import React, { useCallback, useEffect, useState } from "react";

function CurrencyExchange({
  label,
  readonly = false,
  currency,
  newCurrency,
  whichCountry,
  howmuchValue,
  ToCountry,
  FromCountry,
}) {
  const [countries, setCountries] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  useEffect(() => {
    console.log("Component mounted");
    fetchCurrencyInfo(selectedCurrency);
  }, []);
  

  const fetchCurrencyInfo = useCallback((currency) => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency || "usd"}.json`;
  
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        if (label === "From") {
          // If converting from a specific country, update the selected country rates
          setCountries(res[currency || "usd"]);
          setSelectedCurrency(currency);
        } else {
          // If converting to a specific country, use the rates of the selected "From" country
          let conversionRate = res[selectedCurrency][currency];
          let newValue = parseFloat(conversionRate);
          howmuchValue(newValue);
        }
        console.log(res[currency || "usd"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [label, selectedCurrency, howmuchValue]);
  
  // const handleCurrencyChange = ;
  function handleCountryChange(e) {
    let selectedCountry = e.target.value;
  
    if (label === "To") {
      whichCountry(selectedCountry);
    } else if (label === "From") {
      whichCountry(selectedCountry);
  
      // Fetch conversion rates for the selected "From" country
      fetchCurrencyInfo(selectedCountry);
    }
  }
  
  


  return (
    <div className="w-1/2 h-min bg-slate-400 flex justify-center text-center p-2">
      <div className={`w-1/2 bg-green-300 p-2 `}>
        <label htmlFor={label}>{label}:</label>
        <br />
        <input
          type="number"
          name={label}
          id={label}
          className="p-2 w-1/2 rounded-md text-center text-2xl"
          readOnly={readonly === "true"} // Convert string to boolean
          value={currency}
          onChange={(e) => {
            newCurrency(e.target.value);
          }}
        />
      </div>
      <div className="w-1/2 bg-blue-300 p-2">
        <label htmlFor={label}>{label} country :</label>
        <br />
        <select name={label} id={label} onChange={handleCountryChange}>
        {Object.keys(countries).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyExchange;
