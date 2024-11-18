const express = require('express');
const productController = require('./../controllers/productController');

const router = express.Router();

router.route('/products').get(productController.getProducts);

module.exports = router;
