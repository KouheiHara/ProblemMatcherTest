import eslint from '@eslint/js';

const rules = {
  'dot-notation': 'warn',
  curly: ['warn', 'multi-line'],
  semi: 'warn',
  indent: ['warn', 2],
  'no-tabs': 'warn',
  eqeqeq: ['warn', 'smart'],
  'no-undef': 'warn',
  'no-unused-vars': 'warn',
};

export default {
  ...eslint.configs.recommended,
  rules: {
    ...eslint.configs.recommended.rules,
    ...rules
  }
};
