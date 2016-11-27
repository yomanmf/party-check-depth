#!/usr/bin/env node

'use strict';

import system from 'system';
import webPage from 'webpage';

const page = webPage.create();

const yargs = require('yargs');

let url;

url = system.args[1];



/**
 * Checks DOM depth of the url page
 * 
 * @function
 * @param url - the url from cli
 */
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