var express = require('express');

var router = express.Router();

let products = [{
  id: 10,
  name: 'Geladeira',
  price: 800,
  type: 'eletronic'
}, {
  id: 20,
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
  const hasDeleted = req.query.hasDeleted || false;
  res.render('productsList', { products: products, hasDeleted: hasDeleted });
});

router.delete('/:id', function(req, res) {
  products = products.filter(function(product) {
    return product.id !== parseInt(req.params.id);
  });
  res.redirect('/products/lista?hasDeleted=true');
});

module.exports = router;
