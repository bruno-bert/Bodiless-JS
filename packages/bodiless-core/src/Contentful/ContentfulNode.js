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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsoluteNodeKey = exports.getRelativeNodeKey = void 0;
var lodash_1 = require("lodash");
var ContentNode_1 = require("../ContentNode");
exports.getRelativeNodeKey = function (basePath, nodePath) {
    var delimiter = '$';
    var baseNodeKey = Array.isArray(basePath) ? basePath.join(delimiter) : basePath;
    var baseNodeKeyLength = baseNodeKey.length + delimiter.length;
    var nodeKey = Array.isArray(nodePath) ? nodePath.join(delimiter) : nodePath;
    return nodeKey.startsWith(baseNodeKey) ? nodeKey.substring(baseNodeKeyLength) : nodeKey;
};
exports.getAbsoluteNodeKey = function (basePath, contentPath) {
    var delimiter = '$';
    var basePathArray = Array.isArray(basePath) ? basePath : basePath.split(delimiter);
    var contentPathArray = Array.isArray(contentPath) ? contentPath : contentPath.split(delimiter);
    return basePathArray.concat(contentPathArray).join(delimiter);
};
// TODO: this class should expose a method that allows to check if node has value in store
var ContentfulNode = /** @class */ (function (_super) {
    __extends(ContentfulNode, _super);
    function ContentfulNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseContentPath = [];
        return _this;
    }
    ContentfulNode.create = function (node, content) {
        var contentfulNode = new ContentfulNode(node.getActions(), node.getGetters(), node.path);
        contentfulNode.setContent(content);
        contentfulNode.setBaseContentPath(node.path);
        return contentfulNode;
    };
    ContentfulNode.prototype.getContentKey = function () {
        return exports.getRelativeNodeKey(this.baseContentPath, this.path);
    };
    ContentfulNode.prototype.getDefaultContent = function () {
        var contentKey = this.getContentKey();
        return this.content[contentKey] || {};
    };
    ContentfulNode.prototype.setContent = function (content) {
        this.content = content;
    };
    ContentfulNode.prototype.setBaseContentPath = function (path) {
        this.baseContentPath = path;
    };
    Object.defineProperty(ContentfulNode.prototype, "data", {
        get: function () {
            var getNode = this.getters.getNode;
            var nodeData = getNode(this.path);
            // @TODO: When we deprecate componentData, this will have to be updated.
            // We'll need to return our default content instead of the emptyValue.
            var isNodeDataEmpty = !nodeData || Object.keys(nodeData).length === 0;
            return !isNodeDataEmpty ? nodeData : this.getDefaultContent();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentfulNode.prototype, "keys", {
        get: function () {
            var _this = this;
            var getKeys = this.getters.getKeys;
            return lodash_1.union(getKeys(), Object.keys(this.content)
                .map(function (key) { return exports.getAbsoluteNodeKey(_this.baseContentPath, key); }));
        },
        enumerable: false,
        configurable: true
    });
    ContentfulNode.prototype.peer = function (path) {
        var peerNode = new ContentfulNode(this.actions, this.getters, path);
        peerNode.setContent(this.content);
        peerNode.setBaseContentPath(this.baseContentPath);
        return peerNode;
    };
    return ContentfulNode;
}(ContentNode_1.DefaultContentNode));
exports.default = ContentfulNode;
//# sourceMappingURL=ContentfulNode.js.map