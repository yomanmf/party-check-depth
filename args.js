'use strict';

import {argv} from 'yargs';
import validUrl from 'valid-url';

let url = argv.url;
const depth = argv.depth;

assert (url, 'url is expected to be entered');

if (url.indexOf('http') !== 0) {
    url = `http://${url}`;
}

assert (validUrl(url), 'url is not valid');

module.exports = { depth, url };