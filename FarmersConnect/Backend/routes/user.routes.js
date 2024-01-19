const express = require("express");
const router = express.Router();


const{ createUser } = require("../controllers/createUser")



router.post("/createUser", createUser)

module.exports = router ;
