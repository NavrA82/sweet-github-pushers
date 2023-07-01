import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts, getProductByID } from "./requests/products";

import {
  getMarkUpAllProducts,
  getMarkUpProduct,
} from "./services/markupService";
const ref = {
  allProducts: document.querySelector("#allProducts"),
  singleProductForm: document.querySelector("#singleProductForm"),
  singleProduct: document.querySelector("#singleProduct"),
};

// getAllProducts().then(({ data: { products } }) => {
// 	const markUp = getMarkUpAllProducts(products);
// 	ref.allProducts.insertAdjacentHTML("beforeend", markUp);
// });

const onFormByIDSubmit = (evt) => {
  evt.preventDefault();
  const id = evt.target.elements.id.value;
  getProductByID(id).then(({ data }) => {
    const markUp = getMarkUpProduct(data);
    ref.singleProduct.innerHTML = markUp;
  });
};

ref.singleProductForm.addEventListener("submit", onFormByIDSubmit);
