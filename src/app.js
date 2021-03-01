const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./routes/user"));
app.use("/group", require("./routes/group"));

app.use(require("./routes/user"));
module.exports = app;
