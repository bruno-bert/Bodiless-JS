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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uuid_1 = require("uuid");
var withEditButton_1 = require("./withEditButton");
var withCompoundForm_1 = require("./withCompoundForm");
var withEditFormSnippet = function (options) { return (function (Component) {
    var id = uuid_1.v1();
    var renderForm = options.renderForm, initialValueHandler = options.initialValueHandler, submitValueHandler = options.submitValueHandler;
    var WithEditFormSnippet = function (props) {
        var _a = withEditButton_1.useEditFormProps(__assign(__assign({}, props), { renderForm: renderForm,
            initialValueHandler: initialValueHandler,
            submitValueHandler: submitValueHandler })), render = _a.renderForm, rest = __rest(_a, ["renderForm"]);
        var snippet = __assign(__assign({ id: id }, rest), { render: render || (function () { return react_1.default.createElement(react_1.default.Fragment, null); }) });
        withCompoundForm_1.useRegisterSnippet(snippet);
        return react_1.default.createElement(Component, __assign({}, props));
    };
    return WithEditFormSnippet;
}); };
exports.default = withEditFormSnippet;
//# sourceMappingURL=withEditFormSnippet.js.map