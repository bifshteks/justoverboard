var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlCart = require('../controllers/cart');
var ctrlAdmin = require('../controllers/admin');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/cart', ctrlCart.cart);
router.get('adminpanel', ctrlAdmin.indexAdmin);

module.exports = router;
