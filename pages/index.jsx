import { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);

	const addCounter = () => setCounter(counter + 1);
	const substractCounter = () => setCounter(counter - 1);

	return (
		<div>
			<p>{counter}</p>
			<button onClick={addCounter}>+</button>
			<button onClick={substractCounter}>-</button>
		</div>
	);
}

function ProductPage() {
	return <Counter></Counter>;
	// <BasicLayout>
	// 	<h1>상품 목록</h1>
	// 	<ProductList></ProductList>
	// </BasicLayout>
}

export default ProductPage;
