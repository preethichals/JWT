const router = require('express').Router();

let Product = require('../models/product');

//SELECT/READ/GET
router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => {
      res.status(400).json('Error: ' + err);
    })
})

//To select a specific record
router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => {
      res.status(400).json('Error: ' + err);
    })
})

//To delete a specific record
router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product Deleted!!!'))
    .catch(err => {
      res.status(400).json('Error: ' + err);
    })
})

//ADD/CREATE/POST
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const newProduct = new Product({
    name,
    price,
    quantity
  })

  newProduct.save()
    .then(() => {
      res.json('Product added');
    })
    .catch(err => {
      res.status(400).json('Error: ' + err);
    })
});

//UPDATE/PUT
router.route('/update/:id').put((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.name = req.body.name,
        product.price = req.body.price,
        product.quantity = req.body.quantity

      product.save()
        .then(() => {
          res.json('Product updated');
        })
        .catch(err => {
          res.status(400).json('Error: ' + err);
        })
    })
});

module.exports = router;