import { fetchProducts } from '@/api';
import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Image from 'next/image';

function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts().then(res => {
			setProducts(res.data);
		});
	}, []);

	return (
		<div>
			<ul className={styles.container}>
				{products &&
					products.map(({ imageUrl, name, price }, index) => {
						return (
							<li className={styles.item} key={index}>
								<div>
									<Image
										src={`${imageUrl}?random=${Math.random()}`}
										width={300}
										height={300}
										alt={name}
									/>
								</div>
								<div>
									<div>{name}</div>
									<div>{price}</div>
								</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default ProductList;
