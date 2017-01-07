#!/usr/bin/env node

'use strict';

import system from 'system';
import webPage from 'webpage';

const page = webPage.create();

const url = system.args[1];
const depth = system.args[2];

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

/**
 * Checks DOM depth of the url page
 * 
 * @function
 * @param url - the url from cli
 * @param depth - the depth from cli
 */

page.open(url, function () {
    const status = page.evaluate(function () {

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
        console.log(a);

    }, depth);

    phantom.exit(status);

});


/*
a = checkDepth();
if (a < 100) {
    console.log('тут должен быть process.exit(0)');
}
else { 
    console.log('тут должен быть process.exit(1)');
}
*/
