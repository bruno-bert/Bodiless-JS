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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeWithBodilessConfigs = exports.mergeConfigs = void 0;
var lodash_1 = require("lodash");
var getBodilessConfigs_1 = require("./getBodilessConfigs");
var mergeConfigs = function (siteConfig, packageConfigs) { return (__assign(__assign({}, siteConfig), { 
    // purge setting
    purge: __spreadArrays(lodash_1.flatten(lodash_1.merge(packageConfigs).map(function (config) { return config.purge; })), (siteConfig.purge ? siteConfig.purge : [])), 
    // theme setting
    // dummy first argument because of https://github.com/microsoft/TypeScript/issues/28010#issuecomment-713484584
    theme: lodash_1.merge.apply(void 0, __spreadArrays([{}], packageConfigs, [siteConfig])).theme, 
    // variants setting
    variants: lodash_1.merge.apply(void 0, __spreadArrays([{}], packageConfigs, [siteConfig])).variants, 
    // plugins setting
    plugins: __spreadArrays(lodash_1.flatten(lodash_1.merge(packageConfigs).map(function (config) { return config.plugins; })), (siteConfig.plugins ? siteConfig.plugins : [])) })); };
exports.mergeConfigs = mergeConfigs;
var bodilessConfigs = getBodilessConfigs_1.getBodilessConfigs();
var mergeWithBodilessConfigs = function (config) { return mergeConfigs(config, bodilessConfigs); };
exports.mergeWithBodilessConfigs = mergeWithBodilessConfigs;
//# sourceMappingURL=mergeConfigs.js.map