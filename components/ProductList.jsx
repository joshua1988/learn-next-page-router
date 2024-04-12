import { fetchProducts } from '@/api';
import React, { useEffect, useState } from 'react';

function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts().then(res => {
			setProducts(res.data);
		});
	}, []);

	return (
		<div>
			<ul>
				{products &&
					products.map((product, index) => {
						return <li key={index}>{product.name}</li>;
					})}
			</ul>
		</div>
	);
}

export default ProductList;
