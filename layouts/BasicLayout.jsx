import Link from 'next/link';
import React from 'react';

function BasicLayout({ children }) {
	return (
		<main>
			<nav>
				<Link href="/">Product</Link> | <Link href="/cart">Cart</Link>
			</nav>
			<div>{children}</div>
		</main>
	);
}

export default BasicLayout;
