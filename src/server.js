require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app")

mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.on("error", (err) => {
  console.log("Erro de conexão: " + err.menssage);
});

mongoose.connection.once("open" , () => {
  console.log("MongoDB conectado!");
})

require("../models/Group");
require("../models/Message");
require("../models/User");

app.listen(process.env.URL__HOST, () => {
    console.log("its running");
})