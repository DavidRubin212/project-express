const express = require("express");
const router = express.Router();
const productController = require("./controller/productController");

router.get("/all", productController.getProduct);

router.get("/one/:id", productController.findId);

router.post('/new',productController.addProduct)

router.put('/update/:id',productController.updateItem)

router.delete('/delete/:id', productController.deleteItem)


module.exports = router;
