export const getMarkUpAllProducts = (products) => {
	return products
		.map(({ description, id, images, price, title }) => {
			const getMarkUpProduct = ` 

    <li data-id = "${id}">
    <h2>${title}</h2>
    <img src="${images[0]}" alt="${title}">
    <p>${description}</p>
    <p>${price}</p>
    </li>`;

			return getMarkUpProduct;
		})
		.join("");
};
