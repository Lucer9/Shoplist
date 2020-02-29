// controllers/PagesController.js
// Importa el modelo de productos
let ProductModel = require('../models/Product')

exports.productdetail = (req, res) => {
  res.render('pages/productdetail')
}

exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      let products = data;
      ProductModel.countProducts()
        .then((data) => {
          array = []
          for (i = 0; i < data.products / 5; i++) {
            array.push(num = { n: i + 1 })
          }
          res.render('pages/homepage', { products: products, count: array }
          );
        });
    });
}

exports.pagination = (req, res) => {
  ProductModel.pagination(req.params.page)
    .then((data) => {
      let products = data;
      ProductModel.countProducts()
        .then((data) => {
          array = []
          for (i = 0; i < data.products / 5; i++) {
            array.push(num = { n: i + 1 })
          }
          res.render('pages/homepage', { products: products, count: array }
          );
        });
    });
}

exports.about = (req, res) => {
  res.send('About us');
}

exports.getProduct = (req, res) => {
  ProductModel.getProduct(req.params.id)
    .then((data) => {
      let product = data;
      res.render('pages/productdetail', { product: product });
    });
}

exports.addProduct = (req, res) => {
  ProductModel.addProduct(req.body)
    .then((result) => {
      ProductModel.all()
        .then((data) => {
          let products = data;
          ProductModel.countProducts()
            .then((data) => {
              array = []
              for (i = 0; i < data.products / 5; i++) {
                array.push(num = { n: i + 1 })
              }
              res.render('pages/homepage', { products: products, count: array }
              );
            });
        });
    });
}


exports.updateProduct = (req, res) => {
  ProductModel.updateProduct(req.params.id, req.body)
  .then((result) => {
    ProductModel.all()
      .then((data) => {
        let products = data;
        ProductModel.countProducts()
          .then((data) => {
            array = []
            for (i = 0; i < data.products / 5; i++) {
              array.push(num = { n: i + 1 })
            }
            res.render('pages/homepage', { products: products, count: array }
            );
          });
      });
  });
}

exports.deleteProduct = (req, res) => {
  ProductModel.deleteProduct(req.params.id)
  .then((result) => {
    ProductModel.all()
      .then((data) => {
        let products = data;
        ProductModel.countProducts()
          .then((data) => {
            array = []
            for (i = 0; i < data.products / 5; i++) {
              array.push(num = { n: i + 1 })
            }
            res.render('pages/homepage', { products: products, count: array }
            );
          });
      });
  });
}


exports.countProducts = (req, res) => {
  ProductModel.countProducts()
    .then((data) => {
      array = []
      for (i = 0; i < data.products / 5; i++) {
        array.push(i + 1)
      }
      res.send(array)
    });
}