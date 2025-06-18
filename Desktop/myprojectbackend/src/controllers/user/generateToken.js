const userServices = require('../../services/user');

const generateTokenController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await userServices.generateToken(email, password);

    res.status(200).json({ token: token });

  } catch (error) {
    console.error('Erro na geração do token:', error);

    if (error.message.includes('obrigatórios') || error.message.includes('inválidas')) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

module.exports = {
  generateTokenController,
};