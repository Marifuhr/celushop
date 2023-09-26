const { user } = require('../Models/UserModel');

async function getUser(req, res) {
  try {
    const { id } = req.params;

    // Buscar el usuario por su ID en la base de datos
    const usuario = await user.findOne({
      where: { id },
    });

    // Verificar si el usuario existe
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Retornar el usuario encontrado
    return res.json(usuario);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener el usuario' });
  }
}

module.exports = {
  getUser,
};

// estamos utilizando el modelo User para buscar un usuario en la base de datos utilizando su ID. Si el usuario no se encuentra, se devuelve una respuesta con un estado de 404 y un mensaje indicando que el usuario no fue encontrado. Si el usuario se encuentra, se devuelve una respuesta con el usuario encontrado.