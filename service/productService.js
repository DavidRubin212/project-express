const productDal = require("../dal/dal");

const getProduct = () => {
	return productDal.getProduct();
};

const findId = (id) => {
	return getProduct().then((products) => {
		return products.filter((i) => i.id == id);
	});
};

const addProduct = (req) => {
	productDal.addProduct(req);
};

const updateItem = (id, newP) => {
	productDal.updateItem(id, newP);
};

const deleteItem =async (id) => {
	return await productDal.deleteItem(id);
};

module.exports = { getProduct, findId, addProduct, updateItem, deleteItem };
