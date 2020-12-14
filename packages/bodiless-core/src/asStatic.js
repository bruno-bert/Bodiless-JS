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
var react_1 = __importDefault(require("react"));
var StaticPage_1 = __importDefault(require("./components/StaticPage"));
/**
 * Wraps given component in StaticPage component making the component and its children read-only
 * @param Component
 */
var asStatic = function (Component) {
    var name = typeof Component === 'string'
        ? Component
        : Component.displayName || Component.name || 'Component';
    var withStatic = function (props) { return (react_1.default.createElement(StaticPage_1.default, null,
        react_1.default.createElement(Component, __assign({}, props)))); };
    withStatic.displayName = "asStatic" + name;
    return withStatic;
};
exports.default = asStatic;
//# sourceMappingURL=asStatic.js.map