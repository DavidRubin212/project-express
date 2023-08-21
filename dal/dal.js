const { get } = require("http");
const jsonfile = require("jsonfile");

const getProduct = () => {
	return jsonfile.readFile("./data.json");
};

const addProduct = (req) => {
	getProduct().then((data) => {
		data.push(req.body);
		return jsonfile.writeFile("./data.json", data);
	});
};

const updateItem = (id, newP) => {
	getProduct().then((product) => {
		product.forEach((element, i) => {
			if (element.id == id) {
				product[i] = newP;
			}
			return jsonfile.writeFile("./data.json", product);
		});
	});
};

const deleteItem = async (id) => {
	const products = await getProduct();
    console.log(products.length);
    products.forEach((element) => {
        if (element.id === +id) {
            products.splice(element, 1);
        }
    });
    console.log(products.length);
    
     await jsonfile.writeFile("./data.json", products);
};

module.exports = { getProduct, addProduct, updateItem, deleteItem };
