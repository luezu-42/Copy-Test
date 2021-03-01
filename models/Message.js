const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: "É preciso um grupo!",
        ref: "Group",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: "É preciso um grupo!",
        ref: "User"
    },
    message: {
        type: String,
        required: "É preciso ter mensagens!",
    },
});

module.exports = mongoose.model("Message", messageSchema);