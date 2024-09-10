/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cs1.animestore.docomo.ne.jp',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
