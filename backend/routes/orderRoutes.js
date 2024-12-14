const express = require('express');
const orderController = require('./../controllers/orderController.js');
const router = express.Router();
const authentication = require('./../middlewares/authentication.js');

router.route('/order').post(authentication.auth, orderController.orderPlace);
router.route('/verify').post(orderController.verifyOrder);
module.exports = router;
