import { useEffect, useState } from "react";

function useInfo(currency) {
    const [data , setData] = useState({})

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${
        currency || "usd"
      }.json`
    ).then((res)=> res.json())
    .then((res)=>{
      setData(res[currency]);
    })
    .catch((e)=>{
      console.log("error",e);
    })
  }, [currency]);
  console.log(data);
    return data;
}

export default useInfo;