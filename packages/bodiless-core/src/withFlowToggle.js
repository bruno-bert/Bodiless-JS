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
exports.ifToggledOff = exports.ifToggledOn = exports.withFlowToggle = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
var mobx_react_lite_1 = require("mobx-react-lite");
/**
 * Allow components to be toggled on/off based on the value of useToggle function
 *
 * @param {ToggleHook} useToggle
 *  Define the conditions to toggle on/off.
 * @returns {<P extends object, Q extends object>}
 *   (On: React.ComponentType<P>, Off: React.ComponentType<Q>) => any}
 */
exports.withFlowToggle = function (useToggle) { return function (On, Off) { return mobx_react_lite_1.observer(function (props) { return (useToggle(props) ? react_1.default.createElement(On, __assign({}, props)) : react_1.default.createElement(Off, __assign({}, props))); }); }; };
exports.ifToggledOn = function (useToggle) { return function () {
    var hocs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hocs[_i] = arguments[_i];
    }
    return function (Component) { return exports.withFlowToggle(useToggle)(lodash_1.flowRight.apply(void 0, hocs)(Component), Component); };
}; };
exports.ifToggledOff = function (useToggle) { return function () {
    var hocs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hocs[_i] = arguments[_i];
    }
    return function (Component) { return exports.withFlowToggle(useToggle)(Component, lodash_1.flowRight.apply(void 0, hocs)(Component)); };
}; };
//# sourceMappingURL=withFlowToggle.js.map