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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.withBodilessData = exports.withActivatorWrapper = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
var withNode_1 = __importStar(require("./withNode"));
var hoc_1 = require("./hoc");
var withEditToggle_1 = require("./withEditToggle");
var withEditButton_1 = __importDefault(require("./withEditButton"));
var withData_1 = __importDefault(require("./withData"));
var hooks_1 = require("./hooks");
/**
 * Given an event name and a wrapper component, provides an HOC which will wrap the base component
 * the wrapper, passing the event prop to the wrapper, and all other props to the base compoent.
 * @param event The event name.
 * @param Wrapper The component to wrap with
 * @private
 */
exports.withActivatorWrapper = function (event, Wrapper) { return (function (Component) { return function (props) {
    var wrapperPropNames = Object.getOwnPropertyNames(hooks_1.useContextActivator(event));
    var eventProps = lodash_1.pick(props, wrapperPropNames);
    var rest = lodash_1.omit(props, wrapperPropNames);
    return (react_1.default.createElement(Wrapper, __assign({}, eventProps),
        react_1.default.createElement(Component, __assign({}, rest))));
}; }); };
/**
 * Convenience HOC to plug a component into the bodiless data model.
 *
 * @param nodeKeys The nodekeys which will be used to locate the component's data.
 *
 * @param defaultData Default data to be provided for this component.
 */
var withBodilessData = function (nodeKey, defaultData) { return lodash_1.flowRight(withNode_1.withNodeKey(nodeKey), withNode_1.default, hoc_1.withNodeDataHandlers(defaultData)); };
exports.withBodilessData = withBodilessData;
/**
 * Makes a component "Bodiless" by connecting it to the Bodiless-jS data flow and giving it
 * a form which can be used to edit its props. Returns a standard `asBodiless...` function,
 * which takes `nodeKey` and `defaultData` parameters, and returns an HOC which yields an editable
 * version of the base component.
 *
 * @param options An object describing how this component should be made editable.
 */
// eslint-disable-next-line max-len
var asBodilessComponent = function (options) { return (
/**
 * Creates an HOC that will make a component "Bodilesss".
 *
 * @param nodeKey The nodeKey identifying where the components data will be stored.
 * @param defaultData An object representing the initial/default data. Supercedes any default
 * data provided as an option.
 * @param useOverrides A hook which returns overrides for edit button options. Will
 * be invoked in the render context of the wrapped component and passed the
 * component's props.
 *
 * @return An HOC which will make the wrapped component "bodiless".
 */
function (nodeKeys, defaultData, useOverrides) {
    if (defaultData === void 0) { defaultData = {}; }
    var _a = options.activateEvent, activateEvent = _a === void 0 ? 'onClick' : _a, Wrapper = options.Wrapper, _b = options.defaultData, defaultDataOption = _b === void 0 ? {} : _b, rest = __rest(options, ["activateEvent", "Wrapper", "defaultData"]);
    var editButtonOptions = useOverrides
        ? function (props) { return (__assign(__assign({}, rest), useOverrides(props))); }
        : rest;
    var finalData = __assign(__assign({}, defaultDataOption), defaultData);
    return lodash_1.flowRight(withBodilessData(nodeKeys, finalData), withEditToggle_1.ifReadOnly(hoc_1.withoutProps(['setComponentData'])), withEditToggle_1.ifEditable(withEditButton_1.default(editButtonOptions), hoc_1.withContextActivator(activateEvent), hoc_1.withLocalContextMenu, Wrapper ? exports.withActivatorWrapper(activateEvent, Wrapper) : lodash_1.identity), withData_1.default);
}); };
exports.default = asBodilessComponent;
//# sourceMappingURL=asBodilessComponent.js.map