// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();

let PagesController = require('../controllers/PagesController');
router.get('/', PagesController.homepage);
router.get('/product', PagesController.productdetail);
router.get('/page=:page', PagesController.pagination);
router.get('/about', PagesController.about);

//PRODUCTS CRUD
router.get("/product/:id", PagesController.getProduct);
router.post("/product/", PagesController.addProduct);
router.post("/productUpdate/:id", PagesController.updateProduct);
router.post("/productDelete/:id", PagesController.deleteProduct);

router.get("/counts", PagesController.countProducts);


// Exporta las configuraciones
module.exports = router;