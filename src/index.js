import "./styles/normalize.css";
import "./styles/index.css";
import {
  getAllProducts,
  getProductByID,
  createNewProduct,
  deleteProduct,
} from "./requests/products";

import {
  getMarkUpAllProducts,
  getMarkUpProduct,
  getMarkUpNewProduct,
} from "./services/markupService";
const ref = {
  allProducts: document.querySelector("#allProducts"),
  singleProductForm: document.querySelector("#singleProductForm"),
  singleProduct: document.querySelector("#singleProduct"),
  newProductForm: document.querySelector("#newProduct"),
  newProductSection: document.querySelector("#newProductSection"),
  deletionProductForm: document.querySelector("#deletionProductForm"),
};

// task 1
// getAllProducts().then(({ data: { products } }) => {
// 	const markUp = getMarkUpAllProducts(products);
// 	ref.allProducts.insertAdjacentHTML("beforeend", markUp);
// });

// task 2
// const onFormByIDSubmit = (evt) => {
// 	evt.preventDefault();
// 	const id = evt.target.elements.id.value;
// 	getProductByID(id).then(({ data }) => {
// 		const markUp = getMarkUpProduct(data);
// 		ref.singleProduct.innerHTML = markUp;
// 	});
// };

// ref.singleProductForm.addEventListener("submit", onFormByIDSubmit);

// task 3
// const onFormBySubmitNewProduct = (evt) => {
// 	evt.preventDefault();

// 	const title = evt.target.elements.title.value;
// 	const description = evt.target.elements.description.value;
// 	const price = evt.target.elements.price.value;

// 	const newProduct = { title, description, price };

// 	createNewProduct(newProduct).then(({ data }) => {
// 		const markUp = getMarkUpNewProduct(data);
// 		ref.newProductSection.innerHTML = markUp;
// 	});
// };

// ref.newProductForm.addEventListener("submit", onFormBySubmitNewProduct);

// task 4
const onDeletionFormSubmit = (evt) => {
  evt.preventDefault();
  const id = evt.target.elements.deletionId.value;
  deleteProduct(id)
    .then(() => {
      alert(`SUCCESS!`);
    })
    .catch(() => {
      alert(`ERROR!`);
    });
};

ref.deletionProductForm.addEventListener("submit", onDeletionFormSubmit);
