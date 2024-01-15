import React from "react";

function Card({ id, eventName, eventDiscription }) {
  const handleAddToCart = () => {};
  return (
    <>
      <div className=" bg-sky-700 m-8 p-4 border-y w-2/5 rounded-lg text-center text-xl    inline-block mx-auto">
        <h1 className="p-2">{id}</h1>
        <p className="p-2">{eventName}</p>
        <p className="p-2 my-5">{eventDiscription}</p>
        <button
          className="bg-lime-500 hover:bg-lime-600 duration-500  text-black font-semibold py-2 px-4 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        <stripe-buy-button
          buy-button-id="buy_btn_1OY9EPSJwamDK2YT8P8chRkO"
          publishable-key="pk_test_51OY8yiSJwamDK2YT8pGkPTI7cOAR4GVnt1MEjolWEg1ygHFkv5QZW7BBBlCueninqIbC6regnx7w061aLW0wUKHY00aH8Wlpx7"
        ></stripe-buy-button>
      </div>
    </>
  );
}

export default Card;
