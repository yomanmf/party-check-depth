#!/usr/bin/env node

'use strict';

import {url, depth} from './args';

import binPath from 'phantomjs-prebuilt';
import path from 'path';
import shell from 'shelljs';

const runPhantom = `${binPath.path} ${url} ${depth}`;

if (shell.exec(runPhantom).code !== 0) {
    shell.exit(1);
};