#!/usr/bin/env node


const binpath = require('binpath');
const path = require('path');
const sell = require('shelljs');

'use strict';

function cli() {  
    var argv = require('yargs')
        .usage('Usage: $0 [--url=url] [==depth=depth]')
        .demand(['url', 'depth'])
        .command('url', 'check the ulrs DOM depth')
        .command('depth', 'the depth of the check')
        .example('$0 --url=https://... --depth=100', 'check the DOM depth in the url')
        .help('h')
        .alias('h', 'help')
        .epilog('copyright 2016')
        .argv;
};

 exports.cli = cli;  