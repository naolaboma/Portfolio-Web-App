module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Replace with your image domain if needed
  },
  env: {
    FORMSPREE_ENDPOINT: process.env.FORMSPREE_ENDPOINT, // Ensure to set this in your environment variables
  },
};