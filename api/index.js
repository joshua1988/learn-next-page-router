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

export { fetchProducts, fetchProductById };
