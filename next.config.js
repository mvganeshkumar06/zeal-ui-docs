const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
});

const config = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx']
});

module.exports = config;
