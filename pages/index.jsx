import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<nav>
				<Link href="/login">Login</Link>
				<Link href="/main">Main</Link>
			</nav>
		</div>
	);
}
