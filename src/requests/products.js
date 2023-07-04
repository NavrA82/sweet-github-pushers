import axios from "axios";

export const getAllProducts = () => {
	return dummyjsonApi.get("/products");
};

export const getProductByID = (id) => {
	return dummyjsonApi.get(`/products/${id}`);
};

export const createNewProduct = (newProduct) => {
	return dummyjsonApi.post(`/products/add`, newProduct);
};

export const deleteProduct = (id) => {
	return dummyjsonApi.delete(`/products/${id}`);
};
