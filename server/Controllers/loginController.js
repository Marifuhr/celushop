const { User } = require('../Models/UserModel.js');

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario y la contraseña son válidos
    const user = await User.findOne({ where: { username } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Iniciar sesión exitosamente
    return res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al iniciar sesión' });
  }
}

module.exports = {
  loginUser,
};