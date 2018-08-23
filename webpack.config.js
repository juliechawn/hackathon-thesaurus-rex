const path = require("path")

module.exports = {
    entry: {
        javascript: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist")
    },
    // externals: ['axios'],
    resolve: {
        alias: {
            react: path.join(__dirname, "node_modules", "react")            
        },
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ["babel-loader"]
                
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
              },
            {
                test: /\.css$/,
                use: [ 
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }, 
            {
                test: /\.png$/,
                loader: "url-loader",
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        mozjpeg: {
                          progressive: true,
                          quality: 65
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                          enabled: false,
                        },
                        pngquant: {
                          quality: '65-90',
                          speed: 4
                        },
                        gifsicle: {
                          interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                          quality: 75
                        }
                      }
                    },
                  ],
            },
            
        ]
    }
}