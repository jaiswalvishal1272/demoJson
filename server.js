const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
require("./config/db/db.config");

const app = express();

app.use(cors());

app.get("/", async(req, resp) => {
    resp.send("app is working fine");
});

app.listen(5000, () => {
    console.log("working fit nd fine");
});