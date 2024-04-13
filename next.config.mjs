/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
				port: '',
				pathname: '/user/**',
			},
		],
	},
};

export default nextConfig;
