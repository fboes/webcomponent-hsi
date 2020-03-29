#!/usr/bin/env node

const fs = require('fs');

const projectName = 'horizontal-situation-indicator';

let source   = fs.readFileSync(`${projectName}.js`).toString()       || process.exit(1);
let templateCss = fs.readFileSync(`src/${projectName}.css`).toString()  || process.exit(2);
let templateSvg = fs.readFileSync(`src/${projectName}.svg`).toString()  || process.exit(3);

String.prototype.replaceur = function() {
  return '$1' + this.trim().replace(/`/g, '\\`').replace(/\r+/g, "\n").replace(/(\s)\s+/gm, '$1') + '$2';
};

source = source.replace(/(<style>).*(<\/style>)/ms, templateCss.replaceur());
source = source.replace(/(<\/style>).*(`)/ms, templateSvg.replaceur());

fs.writeFileSync(`${projectName}.js`, source);
console.log('Done');
