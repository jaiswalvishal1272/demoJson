const express = require('express');
require("./config/db/db.config");

const app = express();



app.get("/", async(req, resp) => {
    resp.send("app is working fine");
});

app.listen(5000, () => {
    console.log("working fit nd fine");
});