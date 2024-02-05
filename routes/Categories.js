var express = require('express');
var router = express.Router();
const Category = require("../controllers/Categories");

/* GET ro show all Category. */
router.post("/category", Category.categorytCreate);
/* GET to create Category. */
router.get("/category", Category.getAllCategory)

module.exports = router;