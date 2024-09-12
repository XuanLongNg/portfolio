/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    typescript: {
        ignoreBuildErrors: true, // Disables TypeScript type checking during builds
    },
};

export default nextConfig;
