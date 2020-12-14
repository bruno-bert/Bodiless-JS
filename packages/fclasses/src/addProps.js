"use strict";
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
exports.addPropsIf = void 0;
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
var react_1 = __importDefault(require("react"));
/**
 * HOC that adds properties to a Component
 * @param propsToAdd
 */
var addProps = function (propsToAdd) { return (function (Component) { return (function (props) { return react_1.default.createElement(Component, __assign({}, propsToAdd, props)); }); }); };
/**
 * HOC that adds props conditionally based on value returned by hook.
 */
exports.addPropsIf = function (conditionHook) { return function (propsToAdd) { return function (Component) {
    var AddPropsIf = function (props) { return (conditionHook(props)
        ? react_1.default.createElement(Component, __assign({}, propsToAdd, props))
        : react_1.default.createElement(Component, __assign({}, props))); };
    return AddPropsIf;
}; }; };
exports.default = addProps;
//# sourceMappingURL=addProps.js.map