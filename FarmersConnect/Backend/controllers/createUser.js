const User = require("../models/signUp.model");

const createUser = async (req, res) => {
  try {
    console.log("Request Body at createUser : ", req.body);

    const { name, email, phoneNumber, password, landNumber } = req.body;

    if (!name || !email || !phoneNumber || !password || !landNumber) {
      console.log("please provide all the fields ... ");
      return res.status(400).json({
        status: 400,
        message: "please Fill all the fields",
      });
    }

    const user = await User.create({
      name,
      email,
      phoneNumber,
      password,
      landNumber,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
      
    });

    const savedUser = await user.save();

    return res.status(200).json({
      status: 200,
      message: "user Created Successfullly!!",
      user: savedUser,
    });
  } catch (error) {
    console.log("Error creating a new User ERROR: ", error);

    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = { createUser };
