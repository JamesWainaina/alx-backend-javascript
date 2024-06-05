# 0x03. ES6 Data Manipulation

## JavaScript - ES6

### Project Details
- **Weight**: 1
- **Ongoing second chance project**: started Jun 3, 2024, 6:00 AM, must end by Jun 8, 2024, 6:00 AM
- **Auto review**: An auto review will be launched at the deadline

### In a Nutshell…
- **Auto QA review**: 0.0/39 mandatory & 0.0/4 optional
- **Altogether**: 0.0%
  - **Mandatory**: 0.0%
  - **Optional**: 0.0%
  - **Calculation**: 0.0% + (0.0% * 0.0%) == 0.0%

### Resources
Read or watch:
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

### Learning Objectives
By the end of this project, you should be able to explain:
- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The Set, Map, and WeakMap data structures

### Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest with the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint. You can verify the entire project running `npm run full-test`
- All functions must be exported

### Setup

#### Install NodeJS 12.11.x
Run the following commands in your home directory:
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # should output v12.11.1
npm -v  # should output 6.11.3

Certainly! Here's a README.md file based on the provided data:

markdown
Copy code
# 0x03. ES6 Data Manipulation

## JavaScript - ES6

### Project Details
- **Weight**: 1
- **Ongoing second chance project**: started Jun 3, 2024, 6:00 AM, must end by Jun 8, 2024, 6:00 AM
- **Auto review**: An auto review will be launched at the deadline

### In a Nutshell…
- **Auto QA review**: 0.0/39 mandatory & 0.0/4 optional
- **Altogether**: 0.0%
  - **Mandatory**: 0.0%
  - **Optional**: 0.0%
  - **Calculation**: 0.0% + (0.0% * 0.0%) == 0.0%

### Resources
Read or watch:
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

### Learning Objectives
By the end of this project, you should be able to explain:
- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The Set, Map, and WeakMap data structures

### Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest with the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint. You can verify the entire project running `npm run full-test`
- All functions must be exported

### Setup

#### Install NodeJS 12.11.x
Run the following commands in your home directory:
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # should output v12.11.1
npm -v  # should output 6.11.3
Install Jest, Babel, and ESLint
In your project directory, use the supplied package.json and run:

sh
Copy code
npm install
Configuration Files
Add the following files to your project directory:

package.json
json
Copy code
{
  "name": "es6-data-manipulation",
  "version": "1.0.0",
  "description": "Project to learn ES6 data manipulation",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint .",
    "full-test": "npm run lint && npm run test"
  },
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.10.5",
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "eslint": "^7.11.0",
    "jest": "^26.4.2"
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
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    }
  },
  "author": "",
  "license": "ISC"
}
babel.config.js
js
Copy code
module.exports = {
  presets: ['@babel/preset-env'],
};
.eslintrc.js
js
Copy code
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
Don't Forget
Run the following command to install all dependencies after adding the package.json:

sh
Copy code
npm install
css
Copy code

This README.md file provides a comprehensive overview of the project, i
