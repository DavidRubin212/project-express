const express = require("express");
const morgan = require("morgan");
const productRouter = require("./router");

const app = express();
const PORT = 3000;

// app.use(morgan("dev"));
app.use(express.json());
app.use("/products", productRouter);


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

