import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">상품 목록</Link> |{' '}
        <Link data-cy="cart-link" href="/cart">
          장바구니
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
