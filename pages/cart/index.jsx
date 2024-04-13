import { fetchCartItems } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';
import BasicLayout from '@/layouts/BasicLayout';

export default function CartPage({ carts }) {
	return (
		<BasicLayout>
			<CartHeader></CartHeader>
			<CartList carts={carts}></CartList>
		</BasicLayout>
	);
}

export async function getServerSideProps() {
	try {
		const { data } = await fetchCartItems();
		return {
			props: {
				carts: data,
			},
		};
	} catch (error) {
		return {
			props: {
				carts: [],
			},
		};
	}
}
