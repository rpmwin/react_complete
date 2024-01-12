import React from "react";

function NewLine({ inputHeader }) {
  return (
    <div className=" bg-blue-700 m-3 relative w-full flex justify-between text-center">
      div
      <div>
        <button className="p-3 bg-slate-400 text-black m-2 rounded-md">
          {" "}
          edit
        </button>
        <button className="p-3 bg-slate-400 text-black m-2 rounded-md">
          {" "}
          delete
        </button>
      </div>
    </div>
  );
}

export default NewLine;
