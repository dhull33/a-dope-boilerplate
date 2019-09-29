#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const program = require('commander');

const VERSION = require('../package').version;
const templateDir = path.join(__dirname, '..', 'templates');
const testDir = path.join(__dirname, '..', 'test');

program
  .name('dope-boiler')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

const getUserDir = () => {
  if (process.argv.length === 0) {
    console.log('Hey where do you want to install me?');
  }
  const inpDir = path.join(__dirname, '..', process.argv[0]);
  console.log(`Installing at ${inpDir}`);
  return inpDir;
};

const copy = (userDirectory, templateDir) => {
  return fs.copy(templateDir, userDirectory, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`FUCK YEAH IT WORKED`);
  });
};

const main = () => {
  console.log(`this is running`);
  getUserDir();
  console.log(program.args);
  copy(testDir, templateDir);
  console.log(process.cwd());
};

main();
