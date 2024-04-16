import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';
import { formatNumberWithDecimalPoint } from '@/utils/format';
import axios from 'axios';
import { useRouter } from 'next/router';

function CartList({ carts }) {
	const router = useRouter();
	const totalAmount = carts.length;
	const totalPrice = carts.reduce((acc, cur) => acc + Number(cur.price), 0);

	const removeCart = async id => {
		const { data } = await axios.post('http://localhost:3000/api/cart', {
			data: {
				id,
			},
		});
		alert(`${data.name}이 삭제 되었습니다`);
		router.replace(router.asPath);
	};

	return (
		<div className={styles.container}>
			<ul>
				{carts.map(({ id, name, price, imageUrl }) => (
					<li key={id} className={styles.item}>
						<div>
							<Image width={100} height={100} src={imageUrl} alt={name}></Image>
						</div>
						<div className={styles.description}>
							<p>{name}</p>
							<p>{price}</p>
							<button onClick={() => removeCart(id)}>삭제하기</button>
						</div>
					</li>
				))}
			</ul>
			<div className={styles.total}>
				<p>
					<span className={styles.price}>총 수량 : {totalAmount}</span>
				</p>
				<p>
					<span className={styles.amount}>
						총 가격 : {formatNumberWithDecimalPoint(totalPrice)}
					</span>
				</p>
			</div>
		</div>
	);
}

export default CartList;
