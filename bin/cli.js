#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');

const VERSION = require('../package').version;

const boilerPlateCode = path.join(__dirname, '..', 'templates');

program
  .name('adp')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

const getDirectory = () => {
  let inpDir = path.join(__dirname, '..', `/a-dope-boilerplate`);
  if (process.argv.length > 2) {
    inpDir = path.join(process.argv[2]);
  }
  return inpDir;
};

const copy = async (installDir, templateDir) => {
  let copyAsync;
  try {
    copyAsync = await fs.copy(templateDir, installDir);
    console.log(`Installed directory:  ${chalk.green(installDir)}`);
  } catch (err) {
    console.log(chalk.red(err));
  }

  return copyAsync;
};

const main = () => {
  try {
    const directory = getDirectory();
    copy(directory, boilerPlateCode);
  } catch (err) {
    console.log(chalk.red(err));
  }
};

main();
