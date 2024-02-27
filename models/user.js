const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "User id is a required field."],
        unique: [true, "User id must be unique."],
        index: true
    },
    name: {
        type: String,
        required: [true, "User Name is a required field."],
        minlength: 3
    },
    email: {
        type: String,
        required: [true, "User e-mail is a required field."],
        unique: [true, "User e-mail must be unique"],
        match: /^\S+@\S+\.\S+$/,
        minlength: 7,
        maxlenght: 60
    },
    // username: {
    //     type: String,
    //     required: [true, "username is a required field."],
    //     unique: [true, "username must be unique."],
    //     minlength: 5,
    //     maxlenght: 15
    // },
    password: {
        type: String,
        required: [true, "Password is a required field."],
        minlength: 6
    },
    contact: {
        type: Number,
        required: [true, "User contact number is a required field."],
        length: 10
    },
    date_of_birth: {
        type: Date
    },
    // role: {
    //     type: String,
    //     required: true,
    //     enum: ["Admin", "Business", "Customer"],
    //     default: "Customer"
    // }
},
{
    timestamps: true
});

module.exports = mongoose.model("users", userSchema);