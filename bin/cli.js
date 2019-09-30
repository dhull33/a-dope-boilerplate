#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const program = require('commander');

const VERSION = require('../package').version;
const templateDir = path.join(__dirname, '..', 'templates');
// const testDir = path.join(__dirname, '..', 'test');

program
  .name('dope-boiler')
  .version(VERSION, ' --version')
  .usage('[dir]')
  .parse(process.argv);

// TODO: Finish this function
// const getUserDir = () => {
//   if (process.argv.length === 0) {
//     console.log('Hey where do you want to install me?');
//   }
//   const inpDir = path.join(__dirname, '..', process.argv[0]);
//   console.log(`Installing at ${inpDir}`);
//   return inpDir;
// };

const copy = (currentDirectory, templateDir) => {
  return fs.copy(templateDir, currentDirectory, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Andddddd it worked. Installed Directory: ${process.cwd()}`);
  });
};

const main = () => {
  console.log(`aye its working!`);
  console.log(process.cwd());
  copy(process.cwd(), templateDir);
};

main();
