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
exports.DEFAULT_REQUEST_DELAY = void 0;
var path_1 = __importDefault(require("path"));
var mobx_1 = require("mobx");
var types_1 = require("./types");
var ItemState;
(function (ItemState) {
    ItemState[ItemState["Clean"] = 0] = "Clean";
    ItemState[ItemState["Flushing"] = 1] = "Flushing";
    ItemState[ItemState["Locked"] = 2] = "Locked";
    ItemState[ItemState["Queued"] = 3] = "Queued";
})(ItemState || (ItemState = {}));
exports.DEFAULT_REQUEST_DELAY = 2000;
var MAXIMUM_REQUEST_DELAY = 5 * 60 * 1000; // 5 minutes
var GatsbyMobxStoreItem = /** @class */ (function () {
    function GatsbyMobxStoreItem(store, key, initialData, event) {
        if (initialData === void 0) { initialData = {}; }
        if (event === void 0) { event = types_1.ItemStateEvent.UpdateFromBrowser; }
        this.data = {};
        this.state = ItemState.Clean;
        this.isDeleted = false;
        this.hasFlushingError = false;
        this.requestDelay = exports.DEFAULT_REQUEST_DELAY;
        this.store = store;
        this.key = key;
        this.setData(initialData);
        this.updateState(event);
    }
    GatsbyMobxStoreItem.prototype.shouldAccept = function () {
        var isClean = this.state === ItemState.Clean;
        return isClean;
    };
    // eslint-disable-next-line class-methods-use-this
    GatsbyMobxStoreItem.prototype.shouldSave = function () {
        var saveEnabled = (process.env.BODILESS_BACKEND_SAVE_ENABLED || '1') === '1';
        // Determine if the resource path is for a page created for preview purposes
        // we do not want to save data for these pages
        var resourcePath = this.getResoucePath();
        var isPreviewTemplatePage = resourcePath.includes(path_1.default.join('pages', '___templates'));
        return saveEnabled && !isPreviewTemplatePage;
    };
    GatsbyMobxStoreItem.prototype.setData = function (data) {
        this.data = data;
        this.isDeleted = false;
    };
    GatsbyMobxStoreItem.prototype.setState = function (state) {
        this.state = state;
    };
    GatsbyMobxStoreItem.prototype.updateState = function (event) {
        switch (event) {
            case types_1.ItemStateEvent.UpdateFromBrowser:
                if (this.state === ItemState.Clean || this.state === ItemState.Locked) {
                    this.scheduleRequest();
                }
                this.setState(ItemState.Queued);
                break;
            case types_1.ItemStateEvent.UpdateFromServer:
                break;
            case types_1.ItemStateEvent.OnRequestStart:
                this.setState(ItemState.Flushing);
                break;
            case types_1.ItemStateEvent.OnRequestEnd:
                this.requestDelay = exports.DEFAULT_REQUEST_DELAY;
                this.hasFlushingError = false;
                if (this.state === ItemState.Queued) {
                    this.scheduleRequest();
                    break;
                }
                // Lock the item for a period of time before setting it to clean
                // So that mitigate the problem with stale data coming from the server
                this.setState(ItemState.Locked);
                this.setLockTimeout();
                break;
            case types_1.ItemStateEvent.OnRequestError:
                // incrementally increasing time between each subsequent retry
                // ensure new delay is not greater than defined maximum
                this.requestDelay = Math.min(this.requestDelay * 2, MAXIMUM_REQUEST_DELAY);
                this.hasFlushingError = true;
                this.scheduleRequest();
                this.setState(ItemState.Queued);
                break;
            case types_1.ItemStateEvent.OnLockTimeout:
                if (this.state === ItemState.Locked) {
                    this.state = ItemState.Clean;
                }
                break;
            default:
                throw new Error('Invalid item event specified.');
        }
    };
    GatsbyMobxStoreItem.prototype.getResoucePath = function () {
        // Extract the collection name (query alias) from the left-side of the key name.
        var _a = this.key.split('$'), collection = _a[0], rest = _a.slice(1);
        // Re-join the rest of the key's right-hand side.
        var fileName = rest.join('$');
        // The query alias (collection) determines the filesystem location
        // where to store the JSON data files.
        // TODO: Don't hardcode 'pages' and provide mechanism for shared (cross-page) content.
        // const resourcePath = path.join('pages', this.store.slug || '', fileName);
        var resourcePath = collection === 'Page'
            ? path_1.default.join('pages', this.store.slug || '', fileName)
            : path_1.default.join('site', fileName);
        return resourcePath;
    };
    GatsbyMobxStoreItem.prototype.request = function () {
        var _this = this;
        this.updateState(types_1.ItemStateEvent.OnRequestStart);
        if (this.shouldSave()) {
            var requestPromise = this.isDeleted
                ? this.store.client.deletePath(this.getResoucePath())
                : this.store.client.savePath(this.getResoucePath(), this.data);
            requestPromise
                .then(function () { return _this.updateState(types_1.ItemStateEvent.OnRequestEnd); })
                .catch(function () { return _this.updateState(types_1.ItemStateEvent.OnRequestError); });
        }
        else {
            this.updateState(types_1.ItemStateEvent.OnRequestEnd);
        }
    };
    // eslint-disable-next-line class-methods-use-this
    GatsbyMobxStoreItem.prototype.scheduleRequest = function () {
        if (this.requestTimeout !== undefined) {
            clearTimeout(this.requestTimeout);
        }
        this.requestTimeout = setTimeout(this.request.bind(this), this.requestDelay);
    };
    GatsbyMobxStoreItem.prototype.setLockTimeout = function () {
        var _this = this;
        if (this.lockTimeout !== undefined) {
            clearTimeout(this.lockTimeout);
        }
        this.lockTimeout = setTimeout(function () {
            _this.updateState(types_1.ItemStateEvent.OnLockTimeout);
        }, 10000);
    };
    GatsbyMobxStoreItem.prototype.update = function (data, event) {
        if (data === void 0) { data = {}; }
        if (event === void 0) { event = types_1.ItemStateEvent.UpdateFromBrowser; }
        switch (event) {
            case types_1.ItemStateEvent.UpdateFromBrowser:
                this.setData(data);
                this.updateState(event);
                break;
            case types_1.ItemStateEvent.UpdateFromServer:
                if (this.shouldAccept()) {
                    this.setData(data);
                    this.updateState(event);
                }
                break;
            default:
                throw new Error('Invalid item event specified.');
        }
    };
    GatsbyMobxStoreItem.prototype.delete = function () {
        this.isDeleted = true;
        this.updateState(types_1.ItemStateEvent.UpdateFromBrowser);
    };
    GatsbyMobxStoreItem.prototype.isPending = function () {
        return this.state === ItemState.Flushing || this.state === ItemState.Queued;
    };
    GatsbyMobxStoreItem.prototype.isClean = function () {
        return this.state === ItemState.Clean;
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], GatsbyMobxStoreItem.prototype, "data", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Number)
    ], GatsbyMobxStoreItem.prototype, "state", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], GatsbyMobxStoreItem.prototype, "isDeleted", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], GatsbyMobxStoreItem.prototype, "hasFlushingError", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GatsbyMobxStoreItem.prototype, "setData", null);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GatsbyMobxStoreItem.prototype, "setState", null);
    return GatsbyMobxStoreItem;
}());
exports.default = GatsbyMobxStoreItem;
//# sourceMappingURL=GatsbyMobxStoreItem.js.map