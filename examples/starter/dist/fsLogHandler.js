"use strict";
/**
 * Copyright © 2020 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.validate = exports.hasLogs = exports.flush = exports.log = void 0;
var LOG_FILE = 'gatsby_error.log';
var log = function (message) {
    global.BODILESS_GATSBY_LOGS = global.BODILESS_GATSBY_LOGS || [];
    global.BODILESS_GATSBY_LOGS.push(message);
};
exports.log = log;
/**
 * flush logs to a file and clear global object
 * @param message that will be prepended to the logs
 */
var flush = function (message) {
    try {
        var appendFileSync = require('fs').appendFileSync;
        var EOL = require('os').EOL;
        var data = message
            .concat(EOL)
            .concat(global.BODILESS_GATSBY_LOGS.join(EOL))
            .concat(EOL);
        appendFileSync(LOG_FILE, data);
        global.BODILESS_GATSBY_LOGS = [];
    }
    catch (e) {
        throw new Error('There is an error found during log flushing');
    }
};
exports.flush = flush;
var validate = function () {
    // eslint-disable-next-line no-useless-catch
    try {
        var existsSync = require('fs').existsSync;
        if (existsSync(LOG_FILE)) {
            throw new Error("Some errors found. Check " + LOG_FILE + " for details.");
        }
    }
    catch (e) {
        throw e;
    }
};
exports.validate = validate;
var clear = function () {
    try {
        var unlinkSync = require('fs').unlinkSync;
        unlinkSync(LOG_FILE);
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }
    }
};
exports.clear = clear;
var hasLogs = function () { return global.BODILESS_GATSBY_LOGS && global.BODILESS_GATSBY_LOGS.length > 0; };
exports.hasLogs = hasLogs;
//# sourceMappingURL=fsLogHandler.js.map