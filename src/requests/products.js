import axios from "axios";
import { dummyjsonApi } from "../services/api";

export const getAllProducts = () => {
	return dummyjsonApi.get("/products");
};
