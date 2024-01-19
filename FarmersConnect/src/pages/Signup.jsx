import React, { useState } from "react";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [landNumber, setLandNumber] = useState("");
  const [loader, setLoader] = useState(false);

  const signupform = async (e) => {
    e.preventDefault();
    // console.log(userName, email, phoneNumber, password, landNumber);

    let Data = {
      name: userName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      landNumber: landNumber,
    };

    let jsonData = JSON.stringify(Data);
    setLoader(true);

    try {
      const response = await fetch(`http://localhost:5544/routes/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (response.ok) {
        console.log("Success: Information has been successfully sent", jsonData.name);
        // Add any success logic here
      } else {
        console.log("Error: Failed to create user");
        // Handle error, you can add more detailed error handling here
      }
    } catch (error) {
      console.error("Signup error occurred...", error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="w-screen min-h-screen flex justify-center items-center text-left flex-col m-6 box-content scroll-lazy duration-100">
      {/* ... rest of your code ... */}
      <form
        onSubmit={signupform}
        className="flex flex-col gap-5 m-2 bg-purple-500 p-8 rounded-md    w-full max-w-[500px] mx-auto my-auto " 
      >
        <label htmlFor="userName">Name: </label>
        <input
          type="text"
          id="userName"
          name="userName"
          className="rounded-md p-3 text-black w-full"
          value={userName}
          required
          placeholder="user Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          className="rounded-md p-3 text-black w-full "
          value={email}
          required
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="text"
          id="phone"
          name="phone"
          required
          className="rounded-md p-3 text-black w-full "
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="rounded-md p-3 text-black w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="landNumber">Land Number: </label>
        <input
          type="text"
          id="landNumber"
          required
          name="landNumber"
          className="rounded-md p-3 text-black w-full "
          value={landNumber}
          placeholder="landNumber"
          onChange={(e) => setLandNumber(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-400 p-2 w-min mx-auto rounded-md"
        >
          {loader ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
