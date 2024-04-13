import React from 'react';
import styles from './ProductDetail.module.css';

function ProductDetail({ product: { imageUrl, price, name } }) {
	return (
		<div>
			<h1>상품 상세 페이지</h1>
			<div className={styles.container}>
				<div>
					<img src={imageUrl} alt={name} />
				</div>
				<div className={styles.description}>
					<p>{name}</p>
					<p>{price}</p>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
