const express = require("express");
const router = express.Router();


const{ createUser } = require("../controllers/createUser")
const{ GetUser } = require("../controllers/getUser")
const{ checker } = require("../controllers/checkitem")



router.post("/createUser", createUser)
router.post("/checkpassword", GetUser)
router.post("/checkphone", checker)

module.exports = router ;
