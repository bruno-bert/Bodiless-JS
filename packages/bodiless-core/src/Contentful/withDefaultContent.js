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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NodeProvider_1 = __importStar(require("../NodeProvider"));
var ContentfulNode_1 = __importDefault(require("./ContentfulNode"));
/**
 * Creates an HOC which provides default content to the wrapped component.
 *
 * The default content is an object (or a function returning an object) keyed
 * by the relative node key at which the wrapped component or its children are
 * expecting their content.  The schema of the content at each node key should
 * match the schema expected by the component which will receive the content.
 *
 * Default content is provided to the component or child only if real, saved content
 * does not exist at a particular.
 *
 * @param content
 * An object or function returning an object containing default content keyed by node key.
 *
 * @returns
 * An HOC providing default content to the wrapped component.
 */
var withDefaultContent = function (content) { return (function (Component) {
    var WithDefaultContent = function (props) {
        var node = NodeProvider_1.useNode().node;
        var content$ = typeof content === 'function'
            ? content(props) : content;
        // eslint-disable-next-line max-len
        var nodeWithDefaultContent = ContentfulNode_1.default.create(node, content$);
        return (react_1.default.createElement(NodeProvider_1.default, { node: nodeWithDefaultContent },
            react_1.default.createElement(Component, __assign({}, props))));
    };
    return WithDefaultContent;
}); };
exports.default = withDefaultContent;
//# sourceMappingURL=withDefaultContent.js.map