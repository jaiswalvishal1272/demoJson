const express = require('express');
const { getUserAuthentication } = require("../../controllers/authController/logInController");

const router = express.Router();

router.route("/").post(getUserAuthentication);

module.exports = router;