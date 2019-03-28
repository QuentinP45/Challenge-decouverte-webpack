const path = require('path');

module.exports = {  
    mode: 'development',
    entry: {  
        app: './js/index.js'  
  },  

    output: {  
        path: path.resolve(__dirname, 'dist'),  
        filename: 'bundle.js'  
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  }  
};