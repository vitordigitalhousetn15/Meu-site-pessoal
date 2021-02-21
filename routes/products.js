var express = require('express');

var router = express.Router();

const products = [{
  name: 'Geladeira',
  price: 800,
  type: 'eletronic'
}, {
  name: 'Arroz',
  price: 30,
  type: 'food'
}]

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

router.get('/', function(req, res) {
  res.render('products', { name: "Cadastro de produtos", types: types });
});

router.post('/', function(req, res) {
  console.log(req.body);
  res.render('products', { name: "Cadastro de produtos", types: types });
});

router.get('/lista', function(req, res) {
  res.render('productsList', { products: products });
});

module.exports = router;
