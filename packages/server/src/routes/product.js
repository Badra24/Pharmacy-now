var express = require("express");
var router = express.Router();

const productController = require("../controller/productController");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
