const mongoose = require("mongoose");
const Group = require("../models/Group");

exports.createGroup = async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Nome do grupo pode conter apenas letras";

  const groupExist = await Group.findOne({ name });

  if (groupExist) throw "Já existe um grupo com esse nome";
  const group = new Group({
    name,
  });

  await group.save();

  res.json({
    message: "Grupo criado!",
  });
};
