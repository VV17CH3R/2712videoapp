/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['avatars.githubusercontent.com'],
    //   },  -------------------------------------------------- OLD STUFF
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'ulugrkckhebfsxsdvejm.supabase.co',
          pathname: '**',
        },
      ],
    },

    experimental: {
      serverActions: true
    }
}

module.exports = nextConfig
