const User = require("../models/signUp.model");

const GetUser = async (req, res) => {
  try {
    console.log("request body at GetUser : ", req.body);

    const { phone, password } = req.body;

    if (!phone || !password) {
      console.log(
        "please provide all the neccessary information to process the data"
      );
      return res.status(400).json({
        status: 400,
        message: "please Fill all the fields",
      });
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(2000);


    const cleanedPhone = phone.replace(/\D/g, ""); // Remove non-numeric characters
    const user = await User.findOne({ phoneNumber: cleanedPhone }).exec();

    if (!user) {
      console.log(`user with phone number ${phone} not found...`);
      return res.status(400).json({
        status: 400,
        message: "user not found...",
      });
    }

    if (password !== user.password) {
      console.log(`user have entered wrong password!!`);
      return res.status(400).json({
        status: 400,
        message: "User entered wrong password",
      });
    }

    if (password === user.password) {
      console.log("Correct passwword!!");
      return res.status(200).json({
        status: 200,
        message: " entered password is correct...",
      });
    }
  } catch (error) {
    console.log(" ##error occured in whilw fetching a user error: ", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = { GetUser };
