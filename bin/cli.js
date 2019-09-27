#!/usr/bin/env node

// const fs = require('fs-extra');
// const path = require('path');
const program = require('commander');

const VERSION = require('../package').version;

// console.log(fs);
// console.log(path);

const main = () => {
  console.log(`this is running`);
  console.log(program.args);
};

program
  .name('create-boiler')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

main();
