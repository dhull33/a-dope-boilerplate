#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const fs = require('fs');

const VERSION = require('../package').version;
const templateDir = path.join(__dirname, '..', 'templates');
// const testDir = path.join(__dirname, '..', 'test');

program
  .name('dope-boiler')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

// TODO: Finish this function
const getUserDir = () => {
  let inpDir = path.join(__dirname, '..', process.argv[0]);
  if (process.argv.length === 0) {
    console.log(chalk.red('Nothing was entered'));
    inpDir = process.cwd();
  }
  console.log(chalk.green(`Installing at: ${inpDir}`));
  return inpDir;
};

const copy = (installDir, templateDir) => {
  fs.copy(templateDir, installDir, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Andddddd it worked. Installed Directory: ${process.cwd()}`);
  });
  return console.log(`Andddddd it worked. Installed Directory: ${installDir}`);
};

const main = () => {
  console.log(process.argv);
  const userDirectory = getUserDir();
  console.log(`aye its working!`);
  console.log('Current directory: ' + chalk.blue(process.cwd()));
  copy(userDirectory, templateDir);
};

main();
