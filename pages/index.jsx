import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductList from '@/components/product-list/ProductList';
import ProductHeader from '@/components/ProductHeader';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p data-cy="counter">{counter}</p>
      <button data-cy="add-button" onClick={increaseCounter}>
        +
      </button>
      <button data-cy="minus-button" onClick={decreaseCounter}>
        -
      </button>
    </div>
  );
}

// 'http://localhost:3000'에 해당하는 페이지 컴포넌트
function ProductPage() {
  const headerTitle = '상품 목록 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <ProductList></ProductList>
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 - `/`
 * 2. 상품 상세 페이지 - `/products/productId`
 * 3. 장바구니 페이지 - `/carts`
 */

export default ProductPage;
