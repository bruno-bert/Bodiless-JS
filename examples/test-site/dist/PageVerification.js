"use strict";
/**
 * Copyright © 2019 Johnson & Johnson
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var sleep_promise_1 = __importDefault(require("sleep-promise"));
var stripSurroundingSlashes = function (path) {
    var path$ = path[0] === '/' ? path.slice(1) : path;
    path$ = path$.endsWith('/') ? path$.slice(0, -1) : path$;
    return path$;
};
var createPageDataUrl = function (path) {
    var fixedPath = path === '/' ? 'index' : stripSurroundingSlashes(path);
    return "/page-data/" + fixedPath + "/page-data.json";
};
var doFetch = function (url) { return axios_1.default.get(url); };
var loadPageDataJson = function (loadObj) {
    var pagePath = loadObj.pagePath, _a = loadObj.retries, retries = _a === void 0 ? 0 : _a;
    var url = createPageDataUrl(pagePath);
    return doFetch(url).then(function (req) {
        var status = req.status, data = req.data;
        // Handle 200
        if (status === 200) {
            try {
                if (data.path === undefined) {
                    throw new Error('not a valid pageData response');
                }
                return true;
            }
            catch (err) {
                // continue regardless of error
            }
        }
        // Handle everything else, including status === 0, and 503s. Should retry
        if (retries < 5) {
            return sleep_promise_1.default(2000)
                .then(function () { return loadPageDataJson(Object.assign(loadObj, { retries: retries + 1 })); });
        }
        // Retried 5 times already, result is a failure.
        return false;
    });
};
var verifyPage = function (pagePath) { return sleep_promise_1.default(2000)
    .then(function () { return loadPageDataJson({ pagePath: pagePath }); }); };
exports.default = verifyPage;
//# sourceMappingURL=PageVerification.js.map