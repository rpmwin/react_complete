import React from "react";

function CurrencyBox({
  label,
  options = [],
  currency = "inr",
  onCurrencyChange,
  amount,
  onAmountChange,
  className,
  readOnly = false,
}) {
  function handleAmountChange(e) {
    onAmountChange(Number(e.target.value));
  }
  return (
    <div className=" w-1/2 bg-slate-400 flex min-w-min justify-around flex-wrap p-3 rounded-2xl">
      <div >
        <label htmlFor={label} className="font-bold text-2xl ">{label}: </label>
        <input type="number" onChange={handleAmountChange} className={`m-2 text-2xl rounded-2xl pl-2`} value={amount} readOnly={readOnly}/>
      </div>
      <div>
        <label htmlFor={label} className="font-bold text-2xl">{label} country: </label>
        <select
          name={label}
          id={label}
          value={currency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {options.map((countries) => (
            <option key={countries} value={countries}>
              {countries}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyBox;
