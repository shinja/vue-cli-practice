module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@vue/standard',
        'plugin:vue/essential',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'import/no-webpack-loader-syntax': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
