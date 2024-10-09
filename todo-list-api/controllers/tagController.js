const Tag = require("../models/tag");

//Criar tag
const createTag = async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar tag", error: error.message });
  }
};

module.exports = { createTag };
