0x01. ES6 Promises
JavaScript Promises, Async/Await, and Error Handling

Table of Contents
Introduction
Learning Objectives
Requirements
Setup
Configuration Files
Usage
License
Introduction
This project aims to provide a comprehensive understanding of JavaScript promises, async/await syntax, and error handling mechanisms. By the end of this project, you should be able to explain and use these concepts effectively.

Learning Objectives
By the end of this project, you should be able to:

Understand the concept of Promises: their purpose, creation, and usage.
Use then, resolve, and catch methods of Promises.
Utilize all methods of the Promise object.
Implement try and catch blocks for error handling.
Use the await operator.
Write and use async functions.
Requirements
All code will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
Allowed editors: vi, vim, emacs, Visual Studio Code.
All files should end with a new line.
A README.md file at the root of the project directory is mandatory.
Code should use the .js extension.
Code will be tested using Jest and the command npm run test.
Code will be verified against lint using ESLint.
All functions must be exported.
Setup
Install NodeJS 12.11.x
In your home directory, execute the following commands:

sh
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# Expected output: v12.11.1
npm -v
# Expected output: 6.11.3
Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and running:

sh
Copy code
npm install
Configuration Files
package.json
json
Copy code
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "eslint": "^7.10.0",
    "jest": "^26.4.2"
  },
  "devDependencies": {
    "babel-jest": "^26.3.0"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}
babel.config.js
js
Copy code
module.exports = {
  presets: [
    '@babel/preset-env',
  ],
};
utils.js
js
Copy code
// Use when you get to tasks requiring uploadPhoto and createUser.

const uploadPhoto = () => {
  return Promise.resolve({ status: 200, body: 'photo-profile-1' });
};

const createUser = () => {
  return Promise.resolve({ firstName: 'Guillaume', lastName: 'Salva' });
};

module.exports = {
  uploadPhoto,
  createUser
};
.eslintrc.js
js
Copy code
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
  },
};
Don't forget to run
sh
Copy code
npm install
when you have the package.json.

Usage
To run tests, use the following command:

sh
Copy code
npm run test
To lint your code, use the following command:

sh
Copy code
npm run lint
License
This project is licensed under the MIT License - see the LICENSE file for details.
