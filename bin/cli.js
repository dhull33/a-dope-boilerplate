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
  const copyAsync = await fs.copy(tempDir, installDir, (err) => {
    if (err) {
      console.log(chalk.red(err.captureStackTrace));
      throw err;
    }
    console.log(`Installed directory:  ${chalk.blue(installDir)}`);
  });

  return copyAsync;
};

const main = () => {
  console.log(process.argv);
  const directory = getDirectory();
  return copy(directory, templateDir);
};

main();
