const express = require('express');
const router = express.Router();
const { userRegistration } = require("../../controllers/authController/signUpController");

router.route("/").post(userRegistration);

module.exports = router;