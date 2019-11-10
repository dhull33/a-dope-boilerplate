#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');

const VERSION = require('../package').version;
const templateDir = path.join(__dirname, '..', 'templates');

program
  .name('adp')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

// const createDirectory = (path) => {
//   if (fs.existsSync(path)) {
//     console.log(chalk.red('Directory already exists.'));
//     return true;
//   } else {
//     console.log(chalk.bgBlue(`Making directory at: ${path}`));
//     return fs.mkdir(path, { recursive: true }, (err) => {
//       if (err) {
//         throw err;
//       }
//     });
//   }
// };

const userDir = () => {
  let inpDir = path.join(__dirname, '..', `/a-dope-boilerplate`);
  if (process.argv.length > 2) {
    inpDir = path.join(__dirname, '..', process.argv[2]);
  }
  // createDirectory(inpDir);
  return inpDir;
};

const copy = (installDir, templateDir) => {
  return fs.copy(templateDir, installDir, { errorOnExist: false }, (err) => {
    if (err) {
      throw err;
    }
    console.log('Installed directory:  ' + chalk.blue(installDir));
  });
};

const main = () => {
  const directory = userDir();
  return copy(directory, templateDir);
};

main();
