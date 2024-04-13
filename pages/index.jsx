import ProductList from '@/components/ProductList';
import BasicLayout from '@/layouts/BasicLayout';

function ProductPage() {
	return (
		<BasicLayout>
			<h1>상품 목록</h1>
			<ProductList></ProductList>
		</BasicLayout>
	);
}

export default ProductPage;
