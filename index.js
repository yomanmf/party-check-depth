#!/usr/bin/env node

'use strict';

const yargs = require('yargs');

function checkDepth() {
    let i = 1,
    sel = '* > *';
    while(document.querySelector(sel)) {
        sel += ' > *';
        i++;
    }
    return i;
}

a = checkDepth();
if (a < 100) {
    console.log('тут должен быть process.exit(0)');
}
else { 
    console.log('тут должен быть process.exit(1)');
}