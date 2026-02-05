/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/newadmissions',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSdmiWhOGLIY85yFM1y4lQATv5ohvdumzlQGx9vg1wBWbVzTfg/viewform',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;