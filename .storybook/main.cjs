const ResolveTypescriptPlugin = require("resolve-typescript-plugin");
const path = require("path");

module.exports = {
    // logLevel: 'debug',
    features: {
        babelModeV7: true,
        postcss: false,
        previewMdx2: true
    },
    framework: "@storybook/html",
    addons: [
        "@storybook/addon-links", 
        "@storybook/addon-essentials", 
        '@storybook/addon-a11y',
        '@storybook/addon-interactions',
        '@storybook/addon-highlight'
    ],
    stories: ["../src/**/*.doc.mdx", "../src/**/*.stories.@(ts|js)", '../src/**/*.stories.mdx'],
    core: {
        disableTelemetry: true,
        builder: "webpack5",
    },
    webpackFinal: async config => {
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new ResolveTypescriptPlugin({
                includeNodeModules: true,
            }),
        ];
        config.module.rules = [
            {
                test: /.storybook\/preview.js/,
                resolve: { fullySpecified: false },
              },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                sideEffects: true,
                options: {
                    configFile: path.resolve("./tsconfig.json"),
                    transpileOnly: true,
                },
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },

            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['node_modules'],
                            },
                        }
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: "raw-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.mdx?$/,
                /** @type {import('@mdx-js/loader').Options} */
                use: [
                    'babel-loader',
                    '@mdx-js/loader'
                  ]
            }
        ];

        return config;
    },
};