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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@bodiless/core");
var GatsbyImageNode = /** @class */ (function (_super) {
    __extends(GatsbyImageNode, _super);
    function GatsbyImageNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GatsbyImageNode.create = function (node, nodeKey, preset) {
        var path = __spreadArrays(node.path, [nodeKey]);
        var gatsbyImgNode = new GatsbyImageNode(node.getActions(), node.getGetters(), path);
        gatsbyImgNode.setPreset(preset);
        return gatsbyImgNode;
    };
    GatsbyImageNode.prototype.setPreset = function (preset) {
        this.preset = preset;
    };
    GatsbyImageNode.prototype.setData = function (dataObj) {
        var setNode = this.actions.setNode;
        setNode(this.path, __assign(__assign({}, dataObj), { preset: this.preset }));
    };
    return GatsbyImageNode;
}(core_1.DefaultContentNode));
exports.default = GatsbyImageNode;
//# sourceMappingURL=GatsbyImageNode.js.map