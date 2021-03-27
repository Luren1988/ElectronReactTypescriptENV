const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack")
const path = require("path");

const isDev = process.env.NODE_ENV !== "production";


const outputPath = path.join(__dirname, "dist")

var main = {
    mode: isDev ? "development" : "production",
    target: "electron-main",
    devtool: isDev ? "source-map" : false,
    entry: path.join(__dirname, "src", "main", "main"),
    output: {
        filename: "index.js",
        path: outputPath,
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ["ts-loader"],
                include: [path.resolve(__dirname, "src")],
                exclude: [path.resolve(__dirname, "node_modules")],
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "src", "public", "index.html")
                }
            ]
        })
    ],
};


var renderer = {
    mode: isDev ? "development" : "production",
    target: "electron-renderer",
    devtool: isDev ? "inline-source-map" : false,
    entry: path.join(__dirname, "src", "renderer", "renderer"),
    output: {
        filename: "renderer.js",
        path: path.resolve(outputPath, "scripts"),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: ["ts-loader"],
                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "node_modules")
                ],
            }
        ]
    },
    resolve: {
        extensions: [".json", ".js", ".jsx", ".css", ".ts", ".tsx"],
    },
    plugins: [],
};

module.exports = [main, renderer];