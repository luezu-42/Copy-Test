const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Coloque um nome!"
    },
    email: {
        type: String,
        required: "Coloque um email!"
    },
    password: {
        type: String,
        required: "Coloque uma senha!",
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User