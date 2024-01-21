import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const loginForm = async (event) => {
    event.preventDefault();

    setLoader(true);

    let Data = {
      phone: phone,
      password: password,
    };

    let jsonData = JSON.stringify(Data);




    try {

     

      const response = await fetch(
        "http://localhost:5544/routes/checkpassword",
        {
          method: "POST", // Change to POST
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonData,
        }
      );




      if (response.ok) {
        console.log("Success: You are successfully logged in",response);
        alert("Correct PASSWORD");
        // navigate("/after/dummy");
      } else {
        console.log("Error: INCORRECT PASSWORD");
        alert("INCORRECT PASSWORD");
      }
    } catch (error) {
      console.log("Login error occurred .. ", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col">
      <form
        onSubmit={loginForm}
        className="flex flex-col gap-5 m-2 bg-purple-500 p-8 rounded-md items-center"
      >
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="rounded-md p-3 text-black"
          value={phone}
          required
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          className="rounded-md p-3 text-black"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-green-400 p-2 w-min rounded-md">
          {loader ? <p>loading...</p> : <p>submit</p>}
        </button>
      </form>
    </div>
  );
}

export default Login;
