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
exports.withClickOutside = exports.withNodeAndHandlers = exports.withNodeDataHandlers = exports.withLocalContextMenu = exports.withContextActivator = exports.withOnlyProps = exports.withExtendHandler = exports.withoutProps = void 0;
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
var hooks_1 = require("./hooks");
var NodeProvider_1 = require("./NodeProvider");
var withNode_1 = __importDefault(require("./withNode"));
var LocalContextMenu_1 = __importDefault(require("./components/LocalContextMenu"));
/**
 * Removes the specified props from the wrapped component.
 * @param ...keys The names of the props to remove.
 */
exports.withoutProps = function (keys) {
    var restKeys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restKeys[_i - 1] = arguments[_i];
    }
    return (function (Component) {
        var keys$ = typeof keys === 'string' ? __spreadArrays([keys], restKeys) : keys;
        var WithoutProps = function (props) { return react_1.default.createElement(Component, __assign({}, lodash_1.omit(props, keys$))); };
        return WithoutProps;
    });
};
/**
 * Utility hoc to add an event handler which extends any handler passed to
 * the original component.
 *
 * Only adds the extension when in edit mode.
 *
 * @param event The name of the event whose handler is to be extended
 * @param useExtender Custom hook returning the handler to add. Will be invoked
 *        during render and receive the original props of the component.
 *
 * @return An HOC which will add the handler.
 */
exports.withExtendHandler = function (event, useExtender) { return function (Component) {
    var WithExtendHandler = function (props) { return (react_1.default.createElement(Component, __assign({}, props, hooks_1.useExtendHandler(event, useExtender(props), props)))); };
    return WithExtendHandler;
}; };
/*
 * Creates an HOC which strips all but the specified props.
 *
 * @param keys A list of the prop-names to keep.
 *
 * @return An HOC which will strip all but the specified props.
 */
exports.withOnlyProps = function () {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return (function (Component) {
        var WithOnlyProps = function (props) { return react_1.default.createElement(Component, __assign({}, lodash_1.pick(props, keys))); };
        return WithOnlyProps;
    });
};
exports.withContextActivator = function (event) { return function (Component) { return mobx_react_lite_1.observer(function (props) {
    var activator = hooks_1.useContextActivator(event, props[event]);
    return react_1.default.createElement(Component, __assign({}, props, activator));
}); }; };
exports.withLocalContextMenu = function (Component) {
    var name = typeof Component === 'string'
        ? Component
        : Component.displayName || Component.name || 'Component';
    var WithLocalContextMenu = function (props) { return (react_1.default.createElement(LocalContextMenu_1.default, null,
        react_1.default.createElement(Component, __assign({}, props)))); };
    WithLocalContextMenu.displayName = name + "WithLocalContextMenu";
    return WithLocalContextMenu;
};
// @TODO: Combine withNode and withNodeDataHandlers and fix types
exports.withNodeDataHandlers = function (defaultData) { return function (Component) { return mobx_react_lite_1.observer(function (props) {
    var enhancedDefaultData = __assign(__assign({}, defaultData), (defaultData ? lodash_1.pick(props, Object.keys(defaultData)) : {}));
    return (react_1.default.createElement(Component, __assign({}, props, NodeProvider_1.useNodeDataHandlers(undefined, enhancedDefaultData))));
}); }; };
exports.withNodeAndHandlers = function (defaultData) { return lodash_1.flowRight(
// @ts-ignore
withNode_1.default, exports.withNodeDataHandlers(defaultData)); };
/**
 * Utility hoc to add onClickOutside handler to the original component.
 * A callback will be executed on both click outside as well as on the `esc` keypress.
 *
 * @return An HOC which will add the handler.
 */
exports.withClickOutside = function (Component) {
    var WithClickOutside = function (props) {
        var onClickOutside = props.onClickOutside;
        var ref = react_1.useRef(null);
        // Only add listners if onClickOutside handler is defined
        if (typeof onClickOutside === 'function') {
            hooks_1.useClickOutside(ref, onClickOutside);
        }
        return (react_1.default.createElement("div", { ref: ref },
            react_1.default.createElement(Component, __assign({}, props))));
    };
    return WithClickOutside;
};
//# sourceMappingURL=hoc.js.map