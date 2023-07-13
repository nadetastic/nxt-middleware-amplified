/** @type {import('next').NextConfig} */

// const webpack = require('webpack'); // eslint-disable-line

const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack }) => {

      if (isServer) {
        config.plugins.push(new webpack.DefinePlugin({
          'window': {},
        }));
      }

    return config
  }
}

module.exports = nextConfig
