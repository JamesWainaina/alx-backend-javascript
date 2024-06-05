0x02. ES6 Classes
Overview
This project focuses on the Object-Oriented Programming (OOP) paradigm in JavaScript using ES6 classes. It covers various topics including defining classes, adding methods, static methods, class inheritance, and metaprogramming.

Project Timeline
Start Date: May 30, 2024, 6:00 AM
End Date: May 31, 2024, 6:00 AM
Auto Review: An automatic review will be conducted at the deadline.
Grading
Auto QA Review: 0.0/33 mandatory & 0.0/3 optional
Total: 0.0%
Mandatory: 0.0%
Optional: 0.0%
Calculation: 0.0% + (0.0% * 0.0%) = 0.0%
Resources
Read or watch:
Classes
Metaprogramming
Learning Objectives
By the end of this project, you should be able to explain the following concepts without external assistance:

How to define a Class
How to add methods to a class
Why and how to add a static method to a class
How to extend a class from another
Metaprogramming and symbols
Requirements
All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All files should end with a new line
A README.md file at the root of the project is mandatory
Your code should use the .js extension
Your code will be tested using Jest with the command npm run test
Your code will be verified against lint using ESLint
Your code needs to pass all tests and lint checks. Verify the entire project by running npm run full-test
Setup
Install NodeJS 12.11.x
Run the following commands in your home directory:

sh
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify the installation:

sh
Copy code
nodejs -v
# Should output: v12.11.1

npm -v
# Should output: 6.11.3
Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint using the supplied package.json and run:

sh
Copy code
npm install
Configuration Files
Add the following configuration files to your project directory:

package.json
json
Copy code
{
  "name": "es6-classes",
  "version": "1.0.0",
  "description": "Project on ES6 classes",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint .",
    "full-test": "npm run lint && npm run test"
  },
  "dependencies": {},
  "devDependencies": {
    "babel-jest": "^24.9.0",
    "babel-preset-env": "^1.7.0",
    "eslint": "^6.8.0",
    "jest": "^24.9.0"
  },
  "author": "",
  "license": "ISC"
}
babel.config.js
js
Copy code
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
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
    'react/prop-types': 0,
  },
};
Don't forget to run the following command after adding package.json:

sh
Copy code
npm install
With these instructions and configuration files, you should be set up to successfully complete the project on ES6 classes.

