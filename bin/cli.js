#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const program = require('commander');

const VERSION = require('../package').version;
const templateDir = path.join(__dirname, '..', 'templates');
const testDir = path.join(__dirname, '..', 'test');

program
  .name('create-boiler')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

// TODO: Create function that parses user directory
// const userDir = () => {};
const copy = () => {
  return fs.copy(templateDir, testDir, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('FUCK YEAH IT WORKED');
  });
};

const main = () => {
  console.log(`this is running`);
  console.log(templateDir);
  console.log(testDir);
  console.log(program.args);
  copy();
};

main();
