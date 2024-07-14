import eslint from '@eslint/js';

const rules = {
  'dot-notation': 'error',
  curly: ['error', 'multi-line'],
  semi: 'error',
  indent: ['error', 2],
  'no-tabs': 'warn',
  eqeqeq: ['error', 'smart']
};

export default {
  ...eslint.configs.recommended,
  rules: {
    ...eslint.configs.recommended.rules,
    ...rules
  }
};
