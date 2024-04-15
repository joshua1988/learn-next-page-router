import React from 'react';
import styles from './ProductDetail.module.css';
import { createCartItem } from '@/api';
import { useRouter } from 'next/router';
import Image from 'next/image';

function ProductDetail({ product }) {
	const { imageUrl, price, name, id } = product;
	const router = useRouter();

	const addCart = async () => {
		try {
			const { data } = await createCartItem(product);
			alert(`${data.name}가 장바구니에 담겼습니다`);
			router.push('/cart');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>상품 상세 페이지</h1>
			<div className={styles.container}>
				<div>
					<Image src={imageUrl} width={250} height={250} alt={name} />
				</div>
				<div className={styles.description}>
					<p>{name}</p>
					<p>{price}</p>
					<button onClick={addCart}>장바구니에 담기</button>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
