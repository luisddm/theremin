/* global module */

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint:recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'max-len': [2, 150],
    'array-bracket-spacing': [2, 'never'], // require or disallow spaces inside brackets (off by default)
    'arrow-parens': [2, 'always'],
    'block-scoped-var': 2,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, { before: false, after: true }], // enforce spacing before and after comma
    'computed-property-spacing': [2, 'never'], // require or disallow spaces inside parentheses (off by default)
    'default-case': 2, // require default case in switch statements (off by default)
    'dot-notation': 2, // encourages use of dot notation whenever possible
    'eol-last': 2, // enforce newline at the end of file, with no multiple empty lines
    'eqeqeq': 2,
    'indent': [2, 2, { SwitchCase: 1 }],
    'key-spacing': [1, { beforeColon: false, afterColon: true }], // enforces spacing between keys and values in object literal properties
    'new-cap': [1, { newIsCap: true, capIsNew: false }], // require a capital letter for constructors
    'no-alert': 2, // disallow the use of alert, confirm, and prompt
    'no-array-constructor': 2, // disallow use of the Array constructor
    'no-console': 1,
    'no-debugger': 2, // disallow use of debugger
    'no-loop-func': 2, // disallow creation of functions within loops
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-native-reassign': 2, // disallow reassignments of native objects
    'no-new': 1, // disallow use of new operator when not part of the assignment or comparison
    'no-new-func': 2, // disallow use of new operator for Function object
    'no-redeclare': 2, // disallow declaring the same variable more then once
    'no-shadow': 2, // disallow declaration of variables already declared in the outer scope
    'no-trailing-spaces': 2,
    'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
    'no-var': 2,
    'object-curly-spacing': [2, 'always'], // require or disallow spaces inside brackets (off by default)
    'object-shorthand': [2, 'always', { avoidExplicitReturnArrows: true }],
    'object-shorthand': [2, 'always'],
    'one-var': [2, 'never'], // allow just one var statement per function (off by default)
    'operator-assignment': [2, 'never'], // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    'prefer-spread': 2,
    'prefer-template': 2,
    'quotes': [2, 'single'], // specify whether double or single quotes should be used
    'semi': [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }], // enforce spacing before and after semicolons
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-infix-ops': 2,
    'spaced-comment': [2, 'always'],
    'template-curly-spacing': [2, 'always'],
    'use-isnan': 2, // disallow comparisons with the value NaN
    'yoda': 2, // require or disallow Yoda conditions
  },
};
