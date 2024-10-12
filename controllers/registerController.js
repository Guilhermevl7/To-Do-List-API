const User = require('../models/user');

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao cadastrar usuário', error: error.message });
    }
};

module.exports = { registerUser };