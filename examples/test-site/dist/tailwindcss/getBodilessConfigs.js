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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBodilessConfigs = exports.getTailwindConfigs = void 0;
/* eslint-disable global-require, import/no-dynamic-require */
var path_1 = __importDefault(require("path"));
var whitelistedModules = [
    '@bodiless/layouts',
    '@bodiless/organisms',
];
var getTailwindConfigs = function (modules) { return modules
    .map(function (module) {
    try {
        var moduleIndexFile = require.resolve(module);
        // when moduleIndexFile is /path/to/module/lib/index.js
        // moduleRoot should be /path/to/module
        var moduleRoot_1 = path_1.default.dirname(path_1.default.dirname(moduleIndexFile));
        var configs = require(module + "/tailwind.config.js");
        return __assign(__assign({}, configs), (configs.purge !== undefined && Array.isArray(configs.purge)
            ? {
                purge: configs.purge.map(function (rule) { return path_1.default.join(moduleRoot_1, rule); }),
            }
            : {}));
    }
    catch (e) {
        return null;
    }
})
    .filter(Boolean); };
exports.getTailwindConfigs = getTailwindConfigs;
var getBodilessConfigs = function () { return getTailwindConfigs(whitelistedModules); };
exports.getBodilessConfigs = getBodilessConfigs;
//# sourceMappingURL=getBodilessConfigs.js.map