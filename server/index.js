require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./Routes/Routes.js');
const sequelize  = require('./db.js');
const {products, user, category} = sequelize.models;

app.use(express.json());

// user.hasMany(products);
// products.belongsTo(user);
category.hasMany(products);
products.belongsTo(category, { foreignKey: 'categoryId' });

app.use(router);

app.listen(3000, () => {
  // conexión a la base de datos
sequelize
.authenticate()
.then(() => {
  console.log('Conexión a la base de datos establecida correctamente.');
 
})
.catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});
  console.log('Server running on port 3000');
});