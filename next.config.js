const config = {
	pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
	webpack(config, options) {
		config.module.rules.push({
			test: /\.mdx?$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: '@mdx-js/loader',
				},
			],
		});
		return config;
	},
};

module.exports = config;
