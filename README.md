# Express-Webpack-Prettier-Boilerplate

[![Known Vulnerabilities](https://snyk.io//test/github/dhull33/Express-Webpack-Prettier-Boilerplate/badge.svg?targetFile=package.json)](https://snyk.io//test/github/dhull33/Express-Webpack-Prettier-Boilerplate?targetFile=package.json)
[![dependencies Status](https://david-dm.org/dhull33/Express-Webpack-Prettier-Boilerplate.svg)](https://david-dm.org/dhull33/Express-Webpack-Prettier-Boilerplate) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdhull33%2FExpress-Webpack-Prettier-Boilerplate.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdhull33%2FExpress-Webpack-Prettier-Boilerplate?ref=badge_shield)

A very opinionated boilerplate to help you get started with Express, Webpack, ESLint, ES6 and Prettier using Airbnb's Javascript Guidelines.

## Why?

I got tired of having to take half a day to set up my development environment.

## Installation

`$ npm install a-dope-boilerplate`

## Get Started

Create your project in the current working directory:

`$ adp ./directory-to-install`

or

`$ adp ./`

To create your project in a directory that isn't in your current working directory:

`$ adp /Absolute/Path/To/Directory`

Navigate to the directory where you created the project and run:

`$ npm install`

## Files and Project Structure

- The files and project structure from [Express Generator](https://github.com/expressjs/generator) with EJS as the templating language and CSS for stylesheets

In addition to the above mentioned files:

- webpack.prod.config.js
- webpack.dev.config.js
- README.md
- package.json
- ecosystem.config.js (So you can use PM2 with Heroku)
- .prettierrc
- .prettierignore
- .gitignore
- .eslintrc.json
- .eslintignore
- .env
- .editorconfig

## NPM Scripts in package.json

     "scripts": {
       "clean": "rimraf DIRECTORY TO CLEAN OUT",
       "start": "pm2-runtime start ecosystem.config.js --env production",
       "start:prettier:dev": "npm-run-all --parallel open:src:dev prettier-watch",
       "clean:build:dev": "run-s clean build open:src:dev",
       "open:src:dev": "nodemon bin/www",
       "prettier-watch": "onchange '**/*.js' -- prettier --write {{changed}}",
       "build:dev": "webpack --config webpack.dev.config.js",
       "build:prod": "webpack --config webpack.prod.config.js"
     }

To run any of these by themselves: `$ npm run <Command>`

For example, to start the express server with nodemon during development:

`$ npm run open:src:dev`

## Resources

- [ESLint Docs](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Docs](https://prettier.io/docs/en/index.html)
- [Webpack Docs](https://webpack.js.org/concepts/)
- [Editor Config](https://editorconfig.org/#download)
- [Express Generator](https://github.com/expressjs/generator)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## EditorConfig, ESLint, and Prettier IDE Plugins

- Most modern IDEs have plugins for ESLint, Prettier, and EditorConfig. If you install them you can configure your IDE to use the files from this boilerplate.

####Issues and Requests

If you find any bugs, have a question about usage, or would like to request a feature submit an issue [HERE](https://github.com/dhull33/Express-Webpack-Prettier-Boilerplate/issues)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdhull33%2FExpress-Webpack-Prettier-Boilerplate.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdhull33%2FExpress-Webpack-Prettier-Boilerplate?ref=badge_large)
