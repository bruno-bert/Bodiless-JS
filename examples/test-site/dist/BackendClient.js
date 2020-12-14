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
var path_1 = __importDefault(require("path"));
var axios_1 = __importDefault(require("axios"));
var backendPort = process.env.GATSBY_BODILESS_BACKEND_PORT || 8001;
var BackendClient = /** @class */ (function () {
    function BackendClient(backendClientConf) {
        var _a = backendClientConf || {}, _b = _a.baseUrl, baseUrl = _b === void 0 ? undefined : _b, _c = _a.prefix, prefix = _c === void 0 ? undefined : _c;
        var host = "http://localhost:" + backendPort;
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line no-undef
            var loc = window.location;
            host = loc.protocol + "//" + loc.hostname + ":" + loc.port;
        }
        this.root = baseUrl || process.env.GATSBY_BODILESS_BACKEND_URL || host;
        this.prefix = prefix || process.env.GATSBY_BODILESS_BACKEND_PREFIX || '/___backend';
    }
    BackendClient.prototype.get = function (resourcePath) {
        return axios_1.default.get(this.root + resourcePath);
    };
    BackendClient.prototype.post = function (resourcePath, data) {
        return axios_1.default.post(this.root + resourcePath, data);
    };
    BackendClient.prototype.delete = function (resourcePath) {
        return axios_1.default.delete(this.root + resourcePath);
    };
    BackendClient.prototype.savePath = function (resourcePath, data) {
        var fullPath = path_1.default.join(this.prefix, 'content', resourcePath);
        return this.post(fullPath, data);
    };
    BackendClient.prototype.deletePath = function (resourcePath) {
        var fullPath = path_1.default.join(this.prefix, 'content', resourcePath);
        return this.delete(fullPath);
    };
    BackendClient.prototype.log = function (data) {
        var fullPath = path_1.default.join(this.prefix, 'log');
        return this.post(fullPath, data);
    };
    BackendClient.prototype.getPath = function (resourcePath) {
        var fullPath = path_1.default.join(this.prefix, 'content', resourcePath);
        return this.get(fullPath);
    };
    BackendClient.prototype.saveFile = function (file) {
        // eslint-disable-next-line no-undef
        var payload = new FormData();
        payload.append('file', file);
        return this.post(this.prefix + "/asset/", payload);
    };
    BackendClient.prototype.savePage = function (path$, template) {
        var payload = {
            path: path$,
            template: template,
        };
        return this.post(this.prefix + "/pages", payload);
    };
    BackendClient.prototype.commit = function (message, directories, paths, files, author) {
        var d = directories || [];
        var p = paths || [];
        var f = files || [];
        var post = {
            message: message,
            dirs: Array.isArray(d) ? d : [d],
            paths: Array.isArray(p) ? p : [p],
            files: Array.isArray(f) ? f : [f],
            author: author,
        };
        return this.post(this.prefix + "/change/commit", post);
    };
    BackendClient.prototype.getLatestCommits = function () {
        return this.post(this.prefix + "/get/commits", {});
    };
    BackendClient.prototype.pull = function () {
        return this.post(this.prefix + "/change/pull", {});
    };
    BackendClient.prototype.reset = function () {
        return this.post(this.prefix + "/change/reset", {});
    };
    BackendClient.prototype.amend = function (paths, files) {
        var p = paths || [];
        var f = files || [];
        var post = {
            paths: Array.isArray(p) ? p : [p],
            files: Array.isArray(f) ? f : [f],
        };
        return this.post(this.prefix + "/change/amend", post);
    };
    BackendClient.prototype.setCurrent = function (name) {
        return this.post(this.prefix + "/set/current", { name: name });
    };
    BackendClient.prototype.getSetList = function () {
        return this.get(this.prefix + "/set/list");
    };
    BackendClient.prototype.getChanges = function () {
        return this.get(this.prefix + "/changes");
    };
    BackendClient.prototype.getConflicts = function (target) {
        var $param = target ? "?target=" + target : '';
        return this.get(this.prefix + "/changes/conflicts" + $param);
    };
    BackendClient.prototype.mergeMaster = function () {
        return this.post(this.prefix + "/merge/master", {});
    };
    return BackendClient;
}());
exports.default = BackendClient;
//# sourceMappingURL=BackendClient.js.map