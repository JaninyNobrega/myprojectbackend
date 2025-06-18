const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET; // Carrega a chave secreta do .env


// Middleware para autenticação JWT.
 
const authMiddleware = (req, res, next) => {

  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Formato de token inválido.' });
  }

 
  try {
    
    const decoded = jwt.verify(token, jwtSecret);

    
    req.user = decoded;

   
    next();
  } catch (error) {
   
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token de autenticação expirado.' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token de autenticação inválido.' });
    }
    
    console.error('Erro desconhecido na verificação do token:', error);
    return res.status(401).json({ message: 'Falha na autenticação.' });
  }
};

module.exports = {
  authMiddleware,
};