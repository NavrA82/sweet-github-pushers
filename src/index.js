import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts } from "./requests/products";
import { getMarkUpAllProducts } from "./services/markupService";
const ref = {
	allProducts: document.querySelector("#allProducts"),
};

getAllProducts().then(({ data: { products } }) => {
	const markUp = getMarkUpAllProducts(products);
	ref.allProducts.insertAdjacentHTML("beforeend", markUp);
});
