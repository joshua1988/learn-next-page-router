import { fetchProductById } from '@/api';
import ProductDetail from '@/components/ProductDetail';
import BasicLayout from '@/layouts/BasicLayout';
import React from 'react';

function ProductDetailPage({ product }) {
	const detail = product[0];

	return (
		<BasicLayout>
			<ProductDetail product={detail}></ProductDetail>
		</BasicLayout>
	);
}

export async function getServerSideProps(context) {
	try {
		const { data } = await fetchProductById(context.params.id);
		return {
			props: {
				product: data,
			},
		};
	} catch (error) {
		return {
			props: {
				product: {},
			},
		};
	}
}

export default ProductDetailPage;
