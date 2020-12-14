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
exports.withNodeKey = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
var NodeProvider_1 = __importStar(require("./NodeProvider"));
var withNode = function (Component) {
    var WithNode = function (_a) {
        var nodeKey = _a.nodeKey, nodeCollection = _a.nodeCollection, rest = __rest(_a, ["nodeKey", "nodeCollection"]);
        if (!nodeKey)
            return react_1.default.createElement(Component, __assign({}, rest));
        var node = NodeProvider_1.useNode(nodeCollection).node.child(nodeKey);
        return (react_1.default.createElement(NodeProvider_1.default, { node: node, collection: nodeCollection },
            react_1.default.createElement(Component, __assign({}, rest))));
    };
    return WithNode;
};
var withNodeKey = function (nodeKeys) {
    if (nodeKeys === void 0) { nodeKeys = {}; }
    return function (Component) {
        var nodeKeyProps = lodash_1.pickBy(typeof nodeKeys === 'string' ? { nodeKey: nodeKeys } : nodeKeys);
        var WithNodeKey = function (props) { return (react_1.default.createElement(Component, __assign({}, nodeKeyProps, props))); };
        return WithNodeKey;
    };
};
exports.withNodeKey = withNodeKey;
exports.default = withNode;
//# sourceMappingURL=withNode.js.map