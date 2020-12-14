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
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
var path_1 = __importDefault(require("path"));
var core_1 = require("@bodiless/core");
var GatsbyMobxStore_1 = __importDefault(require("./GatsbyMobxStore"));
var GatsbyNodeProvider = /** @class */ (function (_super) {
    __extends(GatsbyNodeProvider, _super);
    function GatsbyNodeProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            store: new GatsbyMobxStore_1.default(_this),
        };
        return _this;
    }
    // React hook inserts props into mobx store.
    GatsbyNodeProvider.getDerivedStateFromProps = function (props, state) {
        var data = props.data;
        var store = state.store;
        store.updateData(data);
        return null;
    };
    // Prevent unnecessary renders when the Gatsby JSON Store updates.
    // Mobx will take care of updating components whose data have changed.
    GatsbyNodeProvider.prototype.shouldComponentUpdate = function () {
        return false;
    };
    Object.defineProperty(GatsbyNodeProvider.prototype, "slug", {
        get: function () {
            var slug = this.props.pageContext.slug;
            return slug;
        },
        enumerable: false,
        configurable: true
    });
    // Create ContentNode instance for consumption by React components.
    GatsbyNodeProvider.prototype.getRootNode = function (collection) {
        var _this = this;
        if (collection === void 0) { collection = 'Page'; }
        var store = this.state.store;
        var actions = lodash_1.pick(store, ['setNode', 'deleteNode']);
        var getters = __assign(__assign({}, lodash_1.pick(store, ['getNode', 'getKeys', 'hasError'])), { getPagePath: function () { return _this.slug; }, 
            // eslint-disable-next-line no-confusing-arrow
            getBaseResourcePath: function () { return collection === 'Page'
                ? path_1.default.join('pages', _this.slug)
                : 'site/'; } });
        var node = new core_1.DefaultContentNode(actions, getters, collection);
        return node;
    };
    GatsbyNodeProvider.prototype.render = function () {
        var children = this.props.children;
        return (react_1.default.createElement(core_1.NodeProvider, { node: this.getRootNode('Site'), collection: "site" },
            react_1.default.createElement(core_1.NodeProvider, { node: this.getRootNode('Page'), collection: "_default" }, children)));
    };
    return GatsbyNodeProvider;
}(react_1.Component));
exports.default = GatsbyNodeProvider;
//# sourceMappingURL=GatsbyNodeProvider.js.map