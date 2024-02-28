const Users = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// desc: LogIn a user
// route: /auth/login
// method: POST
const getUserAuthentication = async (req, resp) => {
    try {
        const { email, password } = req.body;
        if(email && password) {
            let user = await Users.findOne({ email });
            if (user) {
                const isPasswordMatch = await bcrypt.compare(password, user.password);
                if(isPasswordMatch) {
                    user = user.toObject();
                    delete user.password;
                    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "5m" });
                    console.log({
                        Status: 200,
                        result: "Success",
                        message: "User has Successfully logged in.",
                        meta : { token: token },
                        data: user
                    });
                    resp.status(200).send({
                        result: "Success",
                        message: "User has successfully logged in.",
                        meta : { token: token },
                        data: user
                    });
                } else {
                    console.log({
                        Status: 401,
                        result: "Success",
                        message: "Wrong Credential--Password Not matched.",
                        data: {}
                    });
                    resp.status(401).send({
                        result: "Success",
                        message: "Wrong Credential--Password Not matched.",
                        data: {}
                    });
                };
            } else {
                console.log({
                    Status: 404,
                    result: "Success",
                    message: "Wrong Credential--User Not Found.",
                    data: {}
                });
                resp.status(404).send({
                    result: "Success",
                    message: "Wrong Credential--User Not Found.",
                    data: {}
                });
            };
        } else {
            console.log({
                Status: 400,
                result: "Success",
                message: "Validation Error--email and Password cannot be blank.",
                data: {}
            });
            resp.status(400).send({
                result: "Success",
                message: "Wrong Credential--email and Password cannot be blank.",
                data: {}
            });
        };
    } catch (error) {
        console.log({
            Status: 500,
            result: "Failed",
            message: "Internal Server Error",
            error,
            data: {}
        });
        resp.status(400).send({
            result: "Success",
            message: "Internal Server Error",
            error,
            data: {}
        });
    };
};

module.exports = { getUserAuthentication };