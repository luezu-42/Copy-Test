const mongoose = require("mongoose");
const User = require("../models/User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.login = async (req, res) => {
    const { email, password} = req.body;
    const user = await User.findOne({
        email,
        password: sha256(password + process.env.SALT),
    });

    if(!user)throw "Email ou Senha não correspondem";

    const token = await jwt.sign({ id: user.id}, process.env.SECRET);

    res.json({
        message: "Usuario logado com sucesso!",
        token,
    })
};

exports.register = async (req, res) => {
    const {name, email, password} = req.body;

    const emailRegex = /\S+@\S+\.\S+/
    //const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

    if(!emailRegex.test(emailRegex)) throw "Email invalido!";
    //if(!passwordRegex.test(password)) throw "A senha deve possuir mais de 6 caracteres e letra maiscula e caracteres especiais"

    const user = new User({ name, email, password: sha256(password + process.env.SALT)});

    const userExist = await User.findOne({
        email,
        password: sha256(password + process.env.SALT),
    });

    if(userExist)throw "Email já cadastrado!";

    await user.save();

    res.json({
        message: "Usuario [" + name + "] registrado com sucesso",
    });
};