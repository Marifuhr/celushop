const express = require('express');
const router = express.Router();
const { getUser } = require('../Controllers/getUser');
const { getProducts } = require('../Controllers/getProducts');
const { getCategories } = require('../Controllers/getCategories');
const { createProduct } = require('../Controllers/createProduct');
const { createRepair } = require('../Controllers/postRepair');


router.get('/users', getUser);

router.get('/products', getProducts);

router.get('/categories', getCategories);
  
  router.post('/repair', createRepair);

  router.post('/admin/products', createProduct);
  
//  router.post('/admin/login', adminController.login);

//  router.post('/admin/create', bulkCreateProducts);

module.exports = router;
