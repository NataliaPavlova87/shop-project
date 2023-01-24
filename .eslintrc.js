module.exports = {
    root: true,

    env: {
        browser: true,
        node: true,
    },

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },

    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:nuxt/recommended",
        "plugin:vue/vue3-recommended",
    ],

    plugins: ["@typescript-eslint"],

    rules: {
        "vue/script-setup-no-uses-vars": "off",
        "indent": ["error", 4],
        'vue/html-indent': ['error', 4],
        "require-jsdoc": "off",
        "constructor-super": "off",
        "operator-linebreak": "off",
        "no-unused-vars": "off",
        "no-debugger": "off",
        "max-len": "off",
        "vue/multi-word-component-names": "off"
    },
};
