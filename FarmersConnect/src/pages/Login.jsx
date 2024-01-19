import React, { useState } from "react";

async function checkPassword(type, value, password) {
  try {
    const response = await fetch(
      `http://localhost:8000/api/checkpassword?type=${type}&value=${value}&password=${password}`
    );
    const data = await response.json();

    if (data.passwordMatch === undefined) {
      // Error handling: Unable to check password
      console.log("Error checking password");
      return null;
    } else if (data.passwordMatch) {
      // Password matches, return the user data
      return data.user;
    } else {
      // Password is incorrect
      return null;
    }
  } catch (error) {
    console.log("Error checking password:", error);
    return null; // Return null to indicate an error
  }
}

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = async (event) => {
    event.preventDefault();

    if (!phone || !password) {
      let missingFields = [];
      if (!phone) missingFields.push("Phone Number");
      if (!password) missingFields.push("Password");
      alert(
        "Please fill in the following fields:\n" + missingFields.join(", ")
      );
      return;
    }

    let userData = await checkPassword("phone", phone, password);

    if (userData) {
      // Password is correct, handle user data
      console.log("User Data:", userData);

      // Redirect to the dashboard page using React Router
      // Make sure to install react-router-dom and set up your routes
      // Example: history.push("/dashboard");
    } else {
      // Password is incorrect
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col">
      {/* ... rest of your code ... */}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-green-400 p-2 w-min rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
