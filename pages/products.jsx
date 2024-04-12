import { fetchProducts } from '@/api';
import BasicLayout from '@/layouts/BasicLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts().then(res => {
			setProducts(res.data);
		});
	});

	return (
		<BasicLayout>
			<h1>상품 목록</h1>
			<div>
				<ul>
					{products &&
						products.map((product, index) => {
							return <li key={index}>{product.name}</li>;
						})}
				</ul>
			</div>
		</BasicLayout>
	);
}

export default ProductPage;
