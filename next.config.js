module.exports = {
  webpack(config) {
    config.module.rules.push({
      // test: /\.svg$/,
      // issuer: {
      //   test: /\.(js|ts)x?$/,
      // },
      // use: ['@svgr/webpack'],
      
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    
    })

    return config
  },
  
}
