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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneChildren = exports.buildGroupTree = exports.addMissingGroups = exports.asElementArray = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
exports.asElementArray = function (children) { return react_1.default.Children
    .toArray(children)
    .filter(react_1.default.isValidElement); };
exports.addMissingGroups = function (GroupComponent) { return (function (elements) { return elements.reduce(function (acc, el) {
    if (el.props.group && !acc.find(function (el$) { return el$.props.name === el.props.group; })) {
        return __spreadArrays(acc, [react_1.default.createElement(GroupComponent, { name: el.props.group })]);
    }
    return acc;
}, elements); }); };
exports.buildGroupTree = function (elements, groupName) {
    if (groupName === void 0) { groupName = '_default'; }
    return elements
        .filter(function (el) { return (el.props.group || '_default') === groupName; })
        .reduce(function (acc, child) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[child.props.name] = {
            element: child,
            members: exports.buildGroupTree(elements, child.props.name),
        }, _a)));
    }, {});
};
exports.cloneChildren = function (props) {
    if (props === void 0) { props = {}; }
    return function (tree) { return Object
        .getOwnPropertyNames(tree)
        .reduce(function (acc, name) {
        var entry = tree[name];
        var newElement = react_1.default.cloneElement(entry.element, __assign(__assign({}, props), { key: entry.element.props.name, children: exports.cloneChildren(props)(entry.members) }));
        return __spreadArrays(acc, [newElement]);
    }, []); };
};
var buildChildren = function (DefaultGroupComponent, props) {
    if (DefaultGroupComponent === void 0) { DefaultGroupComponent = react_1.default.Fragment; }
    if (props === void 0) { props = {}; }
    return lodash_1.flow(exports.asElementArray, exports.addMissingGroups(DefaultGroupComponent), exports.buildGroupTree, exports.cloneChildren(props));
};
var StructuredChildren = function (_a) {
    var components = _a.components, children = _a.children, rest = __rest(_a, ["components", "children"]);
    return (react_1.default.createElement(react_1.default.Fragment, null, buildChildren(components.Group, rest)(children)));
};
exports.default = StructuredChildren;
//# sourceMappingURL=StructuredChildren.js.map