const express = require('express');
const ProductsController = require('../controller/ProductsController')
const router = express.Router();

router.get("/ProductList/:pageNo/:perPage/:searchKeyword",ProductsController.ProductList)
module.exports=router;