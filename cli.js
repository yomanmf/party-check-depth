'use strict';

function cli() {  
    var argv = require('yargs')
        .usage('Usage: $0 [--url=url] [==depth=depth]')
        .command('url', 'check the ulrs DOM depth')
        .command('depth', 'the depth of the check')
        .example('$0 --url=https://... --depth=100', 'check the DOM depth in the url')
        .epilog('copyright 2016')
        .help('h')
        .alias('h', 'help')
        .argv;
};

 exports.cli = cli;  