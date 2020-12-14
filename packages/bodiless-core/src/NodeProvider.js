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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNodeDataHandlers = exports.useNode = exports.NodeContext = void 0;
var react_1 = __importStar(require("react"));
var ContentNode_1 = require("./ContentNode");
var NodeContext = react_1.default.createContext({
    activeCollection: '_default',
    collections: {
        _default: ContentNode_1.DefaultContentNode.dummy(),
    },
});
exports.NodeContext = NodeContext;
var useNode = function (collection) {
    var map = react_1.default.useContext(NodeContext);
    // If no collection is specified, then return a node from the
    // collection which was set by the most recent NodeProvier.
    var key = collection || map.activeCollection || '_default';
    return {
        node: map.collections[key],
    };
};
exports.useNode = useNode;
// Gets data handlers from the current node,
var useNodeDataHandlers = function (collection, defaultValue) {
    if (defaultValue === void 0) { defaultValue = {}; }
    var node = useNode(collection).node;
    return {
        setComponentData: function (data) { return node.setData(data); },
        componentData: __assign(__assign({}, defaultValue), node.data),
    };
};
exports.useNodeDataHandlers = useNodeDataHandlers;
var NodeProvider = function (_a) {
    var _b;
    var node = _a.node, collection = _a.collection, children = _a.children;
    var currentValue = react_1.useContext(NodeContext);
    // If no collection specified, then create a new node in the active collection.
    var activeCollection = collection || currentValue.activeCollection || '_default';
    var newValue = {
        activeCollection: activeCollection,
        collections: __assign(__assign({}, currentValue.collections), (_b = {}, _b[activeCollection] = node, _b)),
    };
    return react_1.default.createElement(NodeContext.Provider, { value: newValue }, children);
};
exports.default = NodeProvider;
//# sourceMappingURL=NodeProvider.js.map