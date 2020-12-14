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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultContentNode = void 0;
var mobx_1 = require("mobx");
var util_1 = require("util");
var DummyContentNodeStore = /** @class */ (function () {
    function DummyContentNodeStore(initialData) {
        this.data = {};
        this.data = __assign({}, initialData);
    }
    DummyContentNodeStore.prototype.setData = function (newData) {
        this.data = __assign({}, newData);
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], DummyContentNodeStore.prototype, "data", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DummyContentNodeStore.prototype, "setData", null);
    return DummyContentNodeStore;
}());
var DefaultContentNode = /** @class */ (function () {
    function DefaultContentNode(actions, getters, path) {
        this.actions = actions;
        this.getters = getters;
        var path$1 = path || [];
        this.path = Array.isArray(path$1) ? path$1 : path$1.split('$');
    }
    DefaultContentNode.prototype.peer = function (path) {
        return new DefaultContentNode(this.actions, this.getters, path);
    };
    DefaultContentNode.prototype.child = function (path) {
        var paths = Array.isArray(path) ? path : [path];
        return this.peer(__spreadArrays(this.path, paths));
    };
    Object.defineProperty(DefaultContentNode.prototype, "data", {
        get: function () {
            var getNode = this.getters.getNode;
            return getNode(this.path);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultContentNode.prototype, "pagePath", {
        get: function () {
            var getPagePath = this.getters.getPagePath;
            return getPagePath();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultContentNode.prototype, "baseResourcePath", {
        get: function () {
            var getBaseResourcePath = this.getters.getBaseResourcePath;
            return getBaseResourcePath('page');
        },
        enumerable: false,
        configurable: true
    });
    DefaultContentNode.prototype.setData = function (dataObj) {
        var setNode = this.actions.setNode;
        setNode(this.path, dataObj);
    };
    DefaultContentNode.prototype.delete = function (path) {
        var deleteNode = this.actions.deleteNode;
        var path$ = util_1.isString(path) ? [path] : path;
        var path$$ = path$ || this.path;
        deleteNode(path$$);
    };
    Object.defineProperty(DefaultContentNode.prototype, "keys", {
        get: function () {
            var getKeys = this.getters.getKeys;
            return getKeys();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultContentNode.prototype, "hasError", {
        get: function () {
            var hasError = this.getters.hasError;
            return hasError;
        },
        enumerable: false,
        configurable: true
    });
    DefaultContentNode.prototype.getGetters = function () {
        return this.getters;
    };
    DefaultContentNode.prototype.getActions = function () {
        return this.actions;
    };
    DefaultContentNode.dummy = function (path, initialData) {
        if (path === void 0) { path = 'root'; }
        if (initialData === void 0) { initialData = {}; }
        var path$1 = Array.isArray(path) ? path : path.split('$');
        var store = new DummyContentNodeStore(initialData);
        var getNode = function () { return store.data; };
        var getKeys = function () { return path$1; };
        var getPagePath = function () { return '/'; };
        var getBaseResourcePath = function () { return '/'; };
        var hasError = function () { return false; };
        var setNode = function (p, d) {
            store.setData(d);
        };
        var deleteNode = function () { };
        var getters = {
            getNode: getNode, getKeys: getKeys, hasError: hasError, getPagePath: getPagePath, getBaseResourcePath: getBaseResourcePath,
        };
        var actions = { setNode: setNode, deleteNode: deleteNode };
        return new DefaultContentNode(actions, getters, path$1);
    };
    return DefaultContentNode;
}());
exports.DefaultContentNode = DefaultContentNode;
//# sourceMappingURL=ContentNode.js.map