import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';
import React from 'react';

// 상품 상세 페이지 컴포넌트
export default function ProductDetailPage({ productDetail }) {
  const headerTitle = '상품 상세 페이지!!';

  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <ProductInfo productDetail={productDetail}></ProductInfo>
    </div>
  );
}

export async function getServerSideProps(context) {
  // /products/100
  const id = context.params.productId;
  const { data } = await fetchProductById(id);

  return {
    props: {
      productDetail: data,
    },
  };
}
