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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
// import isEqual from 'react-fast-compare';
var BackendClient_1 = __importDefault(require("./BackendClient"));
var addPageLeaver_1 = __importDefault(require("./addPageLeaver"));
// eslint-disable-next-line import/no-cycle
var GatsbyMobxStoreItem_1 = __importDefault(require("./GatsbyMobxStoreItem"));
var types_1 = require("./types");
// const Logger = require('../service/Logger.js');
// const logger = new Logger('GatsbyMobxStore', HttpService);
var nodeChildDelimiter = '$';
/**
 * Query names returned by GraphQL as object keys, with query results
 * contained in the edges property.
 *
 * Query names can be dynamic therefore is best to not hardcode the query names.
 */
var GatsbyMobxStore = /** @class */ (function () {
    function GatsbyMobxStore(nodeProvider) {
        var _this = this;
        this.store = new Map();
        this.slug = null;
        this.data = {};
        this.getKeys = function () { return Array.from(_this.store.keys()); };
        this.getNode = function (keyPath) {
            var key = keyPath.join(nodeChildDelimiter);
            var item = _this.store.get(key);
            var storeValue = item && !item.isDeleted ? item.data : null;
            var dataValue = _this.data[key];
            return storeValue || dataValue || {};
        };
        this.setItem = function (key, item) {
            _this.store.set(key, item);
        };
        this.deleteItem = function (key, soft) {
            if (soft === void 0) { soft = true; }
            if (soft) {
                var item = _this.store.get(key);
                return item && item.delete();
            }
            return _this.store.delete(key);
        };
        /**
         * Mobx action saves or updates items to GatsbyMobxStore.store.
         */
        this.setNode = function (keyPath, value, event) {
            if (value === void 0) { value = {}; }
            if (event === void 0) { event = types_1.ItemStateEvent.UpdateFromBrowser; }
            var key = keyPath.join(nodeChildDelimiter);
            var item = _this.store.get(key);
            if (item) {
                item.update(value, event);
            }
            else {
                _this.setItem(key, new GatsbyMobxStoreItem_1.default(_this, key, value, event));
            }
        };
        this.getChildrenNodes = function (keyPath) {
            var key = keyPath.join(nodeChildDelimiter);
            var children = Array.from(_this.store)
                .filter(function (item) { return item[0].indexOf(key) === 0 && item[0] !== key; });
            return children;
        };
        this.deleteNode = function (keyPath) {
            var children = _this.getChildrenNodes(keyPath);
            children.forEach(function (child) {
                _this.deleteItem(child[0]);
            });
            var key = keyPath.join(nodeChildDelimiter);
            _this.deleteItem(key);
        };
        this.hasError = function () {
            var itemsWithError = Array.from(_this.store.values())
                .filter(function (item) { return item.hasFlushingError; });
            return itemsWithError.length > 0;
        };
        this.setNodeProvider(nodeProvider);
        this.client = new BackendClient_1.default();
        addPageLeaver_1.default(this.getPendingItems.bind(this));
    }
    GatsbyMobxStore.prototype.getPendingItems = function () {
        return Array.from(this.store.values())
            .filter(function (item) { return item.isPending(); });
    };
    GatsbyMobxStore.prototype.setNodeProvider = function (nodeProvider) {
        this.slug = nodeProvider.slug;
    };
    // eslint-disable-next-line class-methods-use-this
    GatsbyMobxStore.prototype.parseData = function (gatsbyData) {
        var result = new Map();
        Object.keys(gatsbyData).forEach(function (collection) {
            if (gatsbyData[collection] === null)
                return;
            gatsbyData[collection].edges.forEach(function (_a) {
                var node = _a.node;
                try {
                    // Namespace the key name to the query name.
                    var key = "" + collection + nodeChildDelimiter + node.name;
                    var data = JSON.parse(node.content);
                    result.set(key, data);
                }
                catch (e) {
                    // console.log(e);
                    // Just ignore any nodes which fail to parse.
                }
            });
        });
        return result;
    };
    /**
     * Called at initial page render to initialize our data from the Gatsby Page Query.
     * Note - we just copy the results to our unobserved data structure unless modifications
     * have been made, in which case we update the observable store.
     *
     * @param gatsbyData
     */
    GatsbyMobxStore.prototype.updateData = function (gatsbyData) {
        var _this = this;
        // The gatsbyData parameter comes in as undefined when there is no query data.
        if (gatsbyData === undefined) {
            return;
        }
        this.data = {};
        var store = this.store;
        var parsedData = this.parseData(gatsbyData);
        // Add all query results into the Mobx store.
        parsedData.forEach(function (data, key) {
            var existingData = store.get(key);
            // TODO: Determine why isEqual gives (apparently) false positives for RGLGrid data.
            // if (!existingData || !isEqual(existingData.data, data)) {
            // Invoke Mobx @action to update store.
            if (!existingData
                || JSON.stringify(existingData.data) !== JSON.stringify(data)) {
                _this.setNode([key], data, types_1.ItemStateEvent.UpdateFromServer);
            }
        });
        // Remove Mobx store entries that are not present in query results
        Array.from(this.store.keys()).forEach(function (key) {
            if (!parsedData.has(key)) {
                var item = _this.store.get(key);
                // The item should not be removed if it is not clean
                // as far as it may not be delivered to the server yet
                if (item.isClean()) {
                    _this.deleteItem(key, false);
                }
            }
        });
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], GatsbyMobxStore.prototype, "store", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Object)
    ], GatsbyMobxStore.prototype, "setItem", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Object)
    ], GatsbyMobxStore.prototype, "deleteItem", void 0);
    return GatsbyMobxStore;
}());
exports.default = GatsbyMobxStore;
//# sourceMappingURL=GatsbyMobxStore.js.map