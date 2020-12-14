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
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceOnEffect = exports.hasProp = exports.withOnlyProps = exports.withoutProps = exports.flowIf = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
// export const flowRightIf = <P extends object>(condition: Condition<P>) => (
//   <H extends Function>(...hocs: Function[]) => (
//     (Component: ComponentType<P> | string) => (
//       // @ts-ignore Expected at least 1 arguments, but got 0 or more.ts(2557)
//       (props: P) => (condition(props) ? flowRight(...hocs)(Component) : Component)
//     )
//   )
// );
exports.flowIf = function (condition) { return (function () {
    var hocs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hocs[_i] = arguments[_i];
    }
    return (function (Component) {
        // @ts-ignore Expected at least 1 arguments, but got 0 or more.ts(2557)
        var WrappedComponent = lodash_1.flow.apply(void 0, hocs)(Component);
        return function (props) { return (condition(props) ? react_1.default.createElement(WrappedComponent, __assign({}, props)) : react_1.default.createElement(Component, __assign({}, props))); };
    });
}); };
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
exports.hasProp = function (name) { return (function (_a) {
    var _b = name, prop = _a[_b];
    return Boolean(prop);
}); };
/**
 * Like replaceWith, but performs the repacement on effect. Useful when you need to
 * ensure that both versions of a component are rendered during SSR, but want to
 * remove one when displayed in the browser (eg for responsive design).
 *
 * @param Replacement The component to replace with.
 */
exports.replaceOnEffect = function (Replacement) { return function (Component) {
    var ReplaceOnEffect = function (props) {
        var _a = react_1.useState(false), replaced = _a[0], setReplaced = _a[1];
        react_1.useEffect(function () { return setReplaced(true); }, []);
        return replaced ? react_1.default.createElement(Replacement, __assign({}, props)) : react_1.default.createElement(Component, __assign({}, props));
    };
    return ReplaceOnEffect;
}; };
//# sourceMappingURL=hoc-util.js.map