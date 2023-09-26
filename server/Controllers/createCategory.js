const { category } = require('../Models/CategoryModel.js');

async function createCategory(req, res) {
  try {
    // Obtén los datos de la categoría desde req.body
    const { name } = req.body;

    // Crea la categoría en la base de datos
    const categorie = await category.create({ name });

    // Devuelve la categoría creada como respuesta
    return res.json(categorie);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear la categoría' });
  }
}

module.exports = {
  createCategory
};