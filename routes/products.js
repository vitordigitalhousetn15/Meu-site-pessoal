var express = require('express');
const model = require('../model/products')

var router = express.Router();

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

const pageName = "Cadastro de produtos"

// http://localhost:3000/products

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('products', { name: pageName, types: types });
});

router.post("/", function(req, res) {
  console.log(req.body);
  res.render('products', { successSave: true, name: pageName, types: types })
})

module.exports = router;
