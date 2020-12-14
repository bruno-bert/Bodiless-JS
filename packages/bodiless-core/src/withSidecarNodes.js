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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endSidecarNodes = exports.startSidecarNodes = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
var NodeProvider_1 = require("./NodeProvider");
var SidecarNodeContext = react_1.createContext([]);
/**
 * `startSidecarNodes` is an HOC which records the current ContentNode so that
 * it can later be restored.
 *
 * @see `withSidecarNodes`
 *
 * @param Component Any component which uses the Bodiless ContentNode system.
 */
var startSidecarNodes = function (Component) {
    var StartSidecarNodes = function (props) {
        var oldValue = react_1.useContext(SidecarNodeContext);
        var newValue = __spreadArrays(oldValue, [react_1.useContext(NodeProvider_1.NodeContext)]);
        return (react_1.default.createElement(SidecarNodeContext.Provider, { value: newValue },
            react_1.default.createElement(Component, __assign({}, props))));
    };
    StartSidecarNodes.displayName = 'StartSidecarNodes';
    return StartSidecarNodes;
};
exports.startSidecarNodes = startSidecarNodes;
/**
 * `endSidecarNodes` is an HOC which restores the ContentNode preserved
 * by `startSidecarNodes`.
 *
 * @see `withSidecarNodes`
 *
 * @param Component Any component which uses the Bodiless ContentNode system.
 */
var endSidecarNodes = function (Component) {
    var EndSidecarNodes = function (props) {
        var oldValue = react_1.useContext(SidecarNodeContext);
        if (oldValue.length === 0)
            return react_1.default.createElement(Component, __assign({}, props));
        var newNodeProviderValue = oldValue[oldValue.length - 1];
        var newValue = oldValue.slice(0, -1);
        return (react_1.default.createElement(NodeProvider_1.NodeContext.Provider, { value: newNodeProviderValue },
            react_1.default.createElement(SidecarNodeContext.Provider, { value: newValue },
                react_1.default.createElement(Component, __assign({}, props)))));
    };
    EndSidecarNodes.displayName = 'EndSidecarNodes';
    return EndSidecarNodes;
};
exports.endSidecarNodes = endSidecarNodes;
/**
 * `withSidecarNodes` allows you to establish a `ContentNode` sub-hierarchiy which should
 * be used by a series of one or more HOC's. Any nodes created by the HOC's enclosed in this
 * wrapper will not affect the hierarchy for subsequent HOC's *outside* the wrapper. For
 * example:
 * ```js
 * flowRight(
 *   ...
 *   withNodeKey('foo'), withNode,  // ...$foo
 *   withSidecarNodes(
 *     withNodeKey('bar'), withNode,  // ...$foo$bar
 *   ),
 *   withNodeKey('baz'); withNode, // ...$foo$baz (otherwise would be ...$foo$bar$baz)
 *   ...
 * )
 * ```
 * This is useful, for example, if you want to apply an enhancment HOC which uses its own
 * content node(s) without affecting the node paths of other children of the wrapped component.
 *
 * @param hocs A list of HOC's to be applied using the parallel node hierarchy.  These will
 *             be composed using lodash `flowRight`
 *
 * @return an HOC which can wrap any Component using the Bodiless `ContentNode` system.
 */
var withSidecarNodes = function () {
    var hocs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hocs[_i] = arguments[_i];
    }
    return lodash_1.flowRight.apply(void 0, __spreadArrays([startSidecarNodes], hocs, [endSidecarNodes]));
};
exports.default = withSidecarNodes;
//# sourceMappingURL=withSidecarNodes.js.map