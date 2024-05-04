import Link from 'next/link';
import React from 'react';

function BasicLayout({ children }) {
	return (
		<main>
			<nav>
				<Link data-cy="product-menu" href="/">
					Product
				</Link>{' '}
				|{' '}
				<Link data-cy="cart-menu" href="/cart">
					Cart
				</Link>
			</nav>
			<div>{children}</div>
		</main>
	);
}

export default BasicLayout;
