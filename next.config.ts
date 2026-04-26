import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],

  },
};

export default nextConfig;
