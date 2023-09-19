require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./Routes/Routes.js');
const sequelize  = require('./db.js');
const {Products, User, Category} = sequelize.models;

app.use(express.json());

User.hasMany(Products);
Products.belongsTo(User);
Category.hasMany(Products);
Products.belongsTo(Category);

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