import { fetchProducts } from '@/api';
import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
					products.map(({ imageUrl, name, id }, index) => {
						return (
							<li className={styles.item} key={index}>
								<Link href={`/products/${id}`}>
									<div>
										<Image src={imageUrl} width={300} height={300} alt={name} />
									</div>
									<div>{name}</div>
								</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default ProductList;
