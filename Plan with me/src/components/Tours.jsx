import React, { useEffect, useState } from "react";
import data from "../data";

function Tours({}) {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    setDataArray(data);
  }, []);
  const handleNotIntrested = (id) => {
    // Filter out the clicked card based on its id
    const updatedDataArray = dataArray.filter((pack) => pack.id !== id);
    setDataArray(updatedDataArray);
  };
  return (
    <div className="flex  flex-wrap  ">
      {dataArray.map((pack) => (
        <div
          key={pack.id}
          className="  bg-[#424769] - m-3 p-3 w-1/5 min-w-min text-center rounded-lg "
        >
          <h1>{pack.id}</h1>

          <img src={pack.image} className=" min-w-80  h-80 p-2 " />

          <h1 className="text-pretty text-3xl font-ita font-serif p-3 rounded-lg bg-gray-800">
            {pack.name}
          </h1>

          <div className="text-l">{pack.info}</div>

          <button
            className="bg- bg-red-700 p-4 rounded-md mt-6"
            onClick={() => handleNotIntrested(pack.id)}
          >
            NOT INTRESTED
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tours;
