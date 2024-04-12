import Link from 'next/link';
import React from 'react';

function BasicLayout({ children }) {
	return (
		<main>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/products">Products</Link>
			</nav>
			<div>{children}</div>
		</main>
	);
}

export default BasicLayout;
