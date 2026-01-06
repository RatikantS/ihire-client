export default {
  '*.{ts,html}': ['eslint --fix'],
  '*.scss': ['stylelint --fix'],
  '*.{ts,html,scss,json,md}': ['prettier --write'],
};
