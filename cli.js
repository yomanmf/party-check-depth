'use strict';

function cli() {  
    var argv = require('yargs')
        --url('url', 'site url')
        --depth('depth', 'depth of how DOM will be checked');    
};

 exports.cli = cli;  