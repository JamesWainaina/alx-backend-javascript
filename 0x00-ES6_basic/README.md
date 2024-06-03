ES6 Learning Objectives Project
Overview
This project is designed to help you understand and explain key concepts introduced in ES6 (ECMAScript 2015). By the end of this project, you should be able to explain the following concepts without needing to reference external sources:

What ES6 is
New features introduced in ES6
The difference between a constant and a variable
Block-scoped variables
Arrow functions and function parameters default values
Rest and spread function parameters
String templating in ES6
Object creation and their properties in ES6
Iterators and for-of loops
Requirements
General
Your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
Allowed editors: vi, vim, emacs, Visual Studio Code.
All files should end with a new line.
A README.md file at the root of the project folder is mandatory.
Your code should use the .js extension.
Your code will be tested using the Jest Testing Framework.
Your code will be analyzed using the linter ESLint with specific rules provided.
All of your functions must be exported.
Setup
Install NodeJS 12.11.x
In your home directory, run the following commands:
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Verify the installation:
nodejs -v
# Should output: v12.11.1
npm -v
# Should output: 6.11.3

Install Jest, Babel, and ESLint
In your project directory, use the provided package.json and run:
Install Jest, Babel, and ESLint
npm install

Configuration Files
Add the following files to your project directory:

package.json
<details>
<summary>Click to show/hide file contents</summary>

{
  "name": "es6-project",
  "version": "1.0.0",
  "description": "Project to learn ES6 features",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {},
  "devDependencies": {
    "@babel/preset-env": "^7.11.5",
    "babel-jest": "^26.6.3",
    "eslint": "^7.11.0",
    "jest": "^26.6.3"
  },
  "babel": {
    "presets": ["@babel/preset-env"]
  },
  "eslintConfig": {
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {}
  }
}

</details>
babel.config.js
<details>
<summary>Click to show/hide file contents</summary>

module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: "current"
      }
    }]
  ]
};

</details>
.eslintrc.js
<details>
<summary>Click to show/hide file contents</summary>

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};

</details>
.eslintrc.js
<details>
<summary>Click to show/hide file contents</summary>

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};

</details>
Final Steps
After adding the configuration files, run npm install from the terminal in your project folder to install all necessary project dependencies.

npm install

You are now set up to start coding and exploring ES6 features. Happy coding!
