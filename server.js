const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
require("./config/db/db.config");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/auth/signup", require("./routes/authRoutes/signUpRoute"));
app.use("/auth/login", require("./routes/authRoutes/logInRoute"));


app.get("/", async(req, resp) => {
    resp.send("app is working fine");
});

app.listen(port, () => {
    console.log("working fit nd fine");
});