#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const fs = require('fs');

const VERSION = require('../package').version;
// const templateDir = path.join(__dirname, '..', 'templates');
// const testDir = path.join(__dirname, '..', 'test');

program
  .name('adp')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

const createDirectory = (path) => {
  if (fs.existsSync(path)) {
    console.log(chalk.red('Directory already exists.'));
    return true;
  } else {
    console.log(chalk.bgBlue(`Making directory at: ${path}`));
    return fs.mkdir(path, { recursive: true }, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const userDir = () => {
  console.log(process.argv.length);
  let inpDir = path.join(__dirname, '..', `/a-dope-boilerplate`);
  if (process.argv.length > 2) {
    inpDir = path.join(__dirname, '..', process.argv[2]);
  }
  console.log(chalk.green(`Installing at: ${inpDir}`));
  createDirectory(inpDir);
};

// const copy = (installDir, templateDir) => {
//   // fs.copy(templateDir, installDir, (err) => {
//   //   if (err) {
//   //     return console.error(err);
//   //   }
//   //   // console.log(`Andddddd it worked. Installed Directory: ${installDir}`);
//   // });
//   return console.log(`Andddddd it worked. Installed Directory: ${installDir}`);
// };

const main = () => {
  console.log(process.argv);
  console.log('Current directory: ' + chalk.blue(process.cwd()));
  // copy(userDirectory, templateDir);
  userDir();
  console.log(chalk.red(process.argv[2]));
};

main();
