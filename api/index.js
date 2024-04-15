import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

function fetchProducts() {
	return instance.get(`/products`);
}

function fetchProductById(id) {
	return instance.get('/products', {
		params: {
			id,
		},
	});
}

function fetchCartItems() {
	return instance.get('/carts');
}

function createCartItem({ id, name, price, imageUrl }) {
	return instance.post('/carts', {
		id,
		name,
		price,
		imageUrl,
	});
}

function removeCartItem(id) {
	return instance.delete(`/carts/${id}`);
}

export {
	fetchProducts,
	fetchProductById,
	fetchCartItems,
	createCartItem,
	removeCartItem,
};
