import React from 'react';

function Card({ flower }) {
  return (
    <div className="card w-[300px] rounded-lg min-h-max flex flex-col text-xl gilroy p-5  shadow-slate-400 bg-slate-700   justify-center items-center  mb-7 hover:scale-105 duration-700 ">
      <h2>{flower.name}</h2>
      <img src={flower.image} alt={flower.name} className=' h-[300px] object-cover object-left-top hover:object-bottom duration-700 rounded-lg border flex-grow'/>
      <p className='text-center relative m-3'>Color: {flower.color} <span style={{ backgroundColor: flower.color  }} className="inline-block w-6 h-6 absolute    rounded-full right-[-30%] opacity-75 "></span></p>
      <p>Description: {flower.Discription}</p>
      <p>Price: {flower.price}</p>
    </div>
  );
}

export default Card;
