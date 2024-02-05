var express = require('express');
var router = express.Router();
const Product = require("../controllers/product");
const { route } = require('./Categories');

/* GET ro show all  Product. */
router.post("/product", Product.productCreate);
/* POST to create product. */
router.get("/product", Product.getAllProduct);

router.put("/Product/:productId", Product.updateProductById);
router.put("/product", Product.updateByname);
router.get("/product/:productId", Product.getProductById);
router.delete("/product/:productId", Product.deletProductByid);

module.exports = router;
