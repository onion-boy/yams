const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './main.ts'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist',
    },
    experiments: {
        asyncWebAssembly: true
    }
}