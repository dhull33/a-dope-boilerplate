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

const getDirectory = () => {
  let inpDir = path.join(__dirname, '..', `/a-dope-boilerplate`);
  if (process.argv.length > 2) {
    inpDir = path.join(process.argv[2]);
    const dirParse = path.parse(process.argv[2]);
    console.log(dirParse);
  }
  return inpDir;
};

const copy = async (installDir, tempDir) => {
  let copyAsync;
  try {
    copyAsync = await fs.copy(tempDir, installDir);
    console.log(`Installed directory:  ${chalk.blue(installDir)}`);
  } catch (err) {
    console.log(chalk.red(err.captureStackTrace));
  }

  return copyAsync;
};

const main = () => {
  try {
    console.log(process.argv);
    // console.log(process.parse())
    const directory = getDirectory();
    copy(directory, templateDir);
  } catch (err) {
    console.log(chalk.red(err.message));
    console.log(chalk.red(err.captureStackTrace));
  }
};

main();
