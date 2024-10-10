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

// listar tags
const getTags = async (req, res) => {
    try {
        const tags = await Tag.find()
        res.json(tags);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar', error: error.message});
    }
};

//Atualizar tag
const updateTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tag) return res.status(404).json({ message: 'Tag não encontrada' });
    res.json(tag);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar tag', error: error.message });
  }
};

module.exports = { createTag, getTags, updateTag };
