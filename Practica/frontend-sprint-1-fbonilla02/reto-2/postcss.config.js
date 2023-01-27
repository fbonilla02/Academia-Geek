module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({stage: 1}),
        require('autoprefixer'),
        require('postcss-nesting'),
        require('postcss-dark-theme-class')({
            darkSelector: '[data-theme="dark"]',
            lightSelector: '[data-theme="light"]',
            }),
            require('postcss-custom-media'),
    ]
}