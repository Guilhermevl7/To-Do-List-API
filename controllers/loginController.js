const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'chave_secreta';

// Login do usuário e geração do token
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Verificar se o usuário existe
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar o token JWT
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: 3600 });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
};

// Middleware de autenticação integrado no login
const authMiddleware = (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
      }
  
      const decoded = jwt.verify(token, SECRET_KEY);
      req.userId = decoded.id;
      next();
    } catch (error) {
      console.error('Erro ao verificar token:', error);
      res.status(401).json({ message: `Token inválido: ${error.message}` });
    }
  };
  

module.exports = { loginUser, authMiddleware };
