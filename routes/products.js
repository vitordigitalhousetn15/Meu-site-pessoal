var express = require('express');
const model = require('../model/products')

var router = express.Router();

// http://localhost:3000/products

/* GET home page. */
router.get('/', function(req, res, next) {
  const types = [{
    id: "eletronic",
    label: "Eletronico"
  }, {
    id: "food",
    label: "Alimenticio"
  }, {
    id: "drugs",
    label: "Farmaceutico"
  }];

  res.render('products', { name: "Cadastro de produtos", types: types });
});

module.exports = router;
