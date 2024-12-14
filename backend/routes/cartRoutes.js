const express = require('express');
const cartController = require('./../controllers/cartController');
const router = express.Router();
const authentication = require('./../middlewares/authentication.js');

router.route('/add').post(authentication.auth, cartController.addToCart);
router.route('/remove').post(authentication.auth, cartController.removeItems);
router.route('/getCart').post(authentication.auth, cartController.getCart);

module.exports = router;
