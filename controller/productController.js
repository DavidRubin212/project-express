const productService = require("../service/productService");

const getProduct = (req, res) => {
	productService.getProduct().then((product) => {
		res.send(product);
	});
};

const findId = (req, res) => {
	const idProduct = productService.findId(req.params.id);
	idProduct.then((Product) => {
		res.send(Product);
	});
};

const addProduct = (req, res) => {
	productService.addProduct(req);
	res.send("the new item inside the data");
};

const updateItem = (req, res) => {
	productService.updateItem(req.params.id, req.body);
	res.send("the item updated");
};

const deleteItem =async (req, res) => {
  await  productService.deleteItem(req.params.id);
  res.send("the item was deleted");
};

module.exports = { getProduct, findId, addProduct, updateItem, deleteItem};
