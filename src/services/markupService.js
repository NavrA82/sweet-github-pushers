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

export const getMarkUpProduct = ({ description, id, images, price, title }) => {
	return `
    <li data-id = "${id}">
    <h2>${title}</h2>
    <img src="${images[0]}" alt="${title}">
    <p>${description}</p>
    <p>${price}</p>
    </li>`;
};

export const getMarkUpNewProduct = ({ description, id, price, title }) => {
	return `
    <li data-id = "${id}">
    <h2>${title}</h2>
    <p>${description}</p>
    <p>${price}</p>
    </li>`;
};
