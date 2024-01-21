const User = require("../models/signUp.model");

const checker = async (req, res) => {
  console.log("Request sent by the front end:", req.body);

  const { type, value } = req.body;

  if (!type || !value) {
    return res.status(400).json({
      status: 400,
      message: "Type and value are required in the query parameters",
    });
  }

  const filter = { [type]: value };

  try {
    const isAvailable = await User.exists(filter);

    if (isAvailable) {
      console.log("Resource is available");
      return res.status(200).json({
        status: 200,
        message: "Resource is available",
        isAvailable: true,
      });
    } else {
      console.log("Resource not found");
      return res.status(404).json({
        status: 404,
        message: "Resource not found",
        isAvailable: false,
      });
    }
  } catch (error) {
    console.error("Error checking availability:", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

module.exports = { checker };
