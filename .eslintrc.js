module.exports = {
    globals: {
        $: true,
    },
    root: true,
    env: {
        node: true,
    },
    rules: {
        'vue/require-v-for-key': 0,
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error'],
            },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    parser: 'vue-eslint-parser',
    plugins: ['vue'],
    extends: ['eslint:recommended', 'plugin:vue/recommended', '@e9ine/eslint-config-vue'],
};
