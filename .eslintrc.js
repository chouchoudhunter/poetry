module.exports = {
  root: true,
  globals: {
    SERVER_ADDRESS: true,
    DOWNLOAD_ADDRESS: true,
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
  ],
  parserOptions: { parser: 'babel-eslint' },
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'standard/no-callback-literal': 0,
    'vue/no-reserved-keys': 0,
    'comma-dangle': ['error', 'always-multiline'], // 对象或数组如果是多行,最后一个值后面加","
    'object-curly-newline': ['error', { // 对象属性间使用相同的换行符
      multiline: true,
      minProperties: 5,
    }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }], // 对象属性必须换行
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'no-new': 0,
    'no-console': 1,
    'no-tabs': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      2,
      'never',
      { beforeStatementContinuationChars: 'never' },
    ],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'ignore',
    }],
    'no-delete-var': 2,
    'prefer-const': [
      2,
      { ignoreReadBeforeAssign: false },
    ],
  },
}
