import axios from "axios";

export const dummyjsonApi = axios.create({
	baseURL: "https://dummyjson.com",
});
