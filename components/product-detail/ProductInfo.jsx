import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export const ALERT_MESSAGE = '장바구니에 추가됨';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { id, name, imageUrl, price } = productDetail;

  const addCart = async () => {
    // 1. 장바구니에 아이템을 담는 API 함수 호출
    const response = await createCartItem(productDetail);
    console.log(response);
    alert(ALERT_MESSAGE);
    // 2. 장바구니 페이지로 이동
    router.push('/cart');
  };

  return (
    <div className={styles.container}>
      <div>
        <Image
          data-cy="product-image"
          src={imageUrl}
          width={250}
          height={250}
          alt={name}
        />
      </div>
      <div className={styles.description}>
        <p data-cy="product-name">{name}</p>
        <p data-cy="product-price">{price}</p>
        <button data-cy="cart-button" onClick={addCart}>
          장바구니에 담기
        </button>
      </div>
    </div>
  );
}
