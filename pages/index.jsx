// function Counter() {
// 	const [counter, setCounter] = useState(0);

import ProductList from '@/components/ProductList';
import BasicLayout from '@/layouts/BasicLayout';

// 	const addCounter = () => setCounter(counter + 1);
// 	const substractCounter = () => setCounter(counter - 1);

// 	return (
// 		<div>
// 			<p data-cy="count">{counter}</p>
// 			<button id="plus-button" onClick={addCounter}>
// 				+
// 			</button>
// 			<button onClick={substractCounter}>-</button>
// 		</div>
// 	);
// }

function ProductPage() {
	// return <Counter></Counter>;
	return (
		<BasicLayout>
			<h1>상품 목록</h1>
			<ProductList></ProductList>
		</BasicLayout>
	);
}

export default ProductPage;
