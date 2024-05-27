import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { id, name, imageUrl, price } = productDetail;

  const addCart = async () => {
    // 1. 장바구니에 아이템을 담는 API 함수 호출
    const response = await createCartItem(productDetail);
    console.log(response);
    alert('장바구니에 추가됨');
    // 2. 장바구니 페이지로 이동
    router.push('/cart');
  };

  return (
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
  );
}
