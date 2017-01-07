'use strict';

import {argv} from 'yargs';
import validUrl from 'valid-url';

let url = argv.url;
const depth = argv.depth;

