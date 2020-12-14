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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStore = exports.PageEditStore = exports.defaultOverlaySettings = void 0;
var mobx_1 = require("mobx");
var SessionStorage_1 = require("../SessionStorage");
exports.defaultOverlaySettings = {
    isActive: false,
    hasCloseButton: false,
    hasSpinner: true,
    message: '',
    maxTimeoutInSeconds: null,
    onClose: function () { },
};
/**
 * @private
 *
 * Holds the current UI state for the editor.
 */
var PageEditStore = /** @class */ (function () {
    function PageEditStore(activeContext) {
        this.activeContext = undefined;
        this.isEdit = SessionStorage_1.getFromSessionStorage('isEdit', false);
        this.isPositionToggled = SessionStorage_1.getFromSessionStorage('isPositionToggled', false);
        this.pageOverlay = {
            data: __assign({}, exports.defaultOverlaySettings),
            timeoutId: 0,
        };
        this.optionMap = new Map();
        this.areLocalTooltipsDisabled = false;
        if (activeContext) {
            this.setActiveContext(activeContext);
        }
    }
    PageEditStore.prototype.reset = function () {
        this.activeContext = undefined;
        this.isEdit = false;
        this.isPositionToggled = false;
        this.optionMap.clear();
        this.pageOverlay = {
            data: __assign({}, exports.defaultOverlaySettings),
            timeoutId: 0,
        };
    };
    PageEditStore.prototype.setActiveContext = function (context) {
        var _this = this;
        if (context)
            this.activeContext = context;
        // Travel the context trail, updating options for each context.
        var keys = [];
        for (var c = this.activeContext; c; c = c.parent) {
            keys.push.apply(keys, this.updateMenuOptions(c));
        }
        // Ensure order is correct and remove obsolete entries.
        var newTrail = new Map();
        keys.reverse().forEach(function (key) {
            newTrail.set(key, _this.optionMap.get(key));
        });
        // Note: requires mobx >5.15.5 to set order correctly.
        // See https://github.com/mobxjs/mobx/issues/1980
        // And https://codesandbox.io/s/wizardly-resonance-u97jm?file=/src/index.js
        this.optionMap.replace(newTrail);
    };
    PageEditStore.prototype.updateMenuOptions = function (context) {
        if (!this.optionMap.has(context.id)) {
            this.optionMap.set(context.id, mobx_1.observable.map({}));
        }
        var map = this.optionMap.get(context.id);
        var keys = new Set();
        __spreadArrays([context], context.peerContexts).forEach(function (c) {
            // Update all items in the map
            c.getMenuOptions().forEach(function (op) {
                keys.add(op.name);
                var existing = map.get(op.name);
                var next = __assign(__assign({}, op), { context: c });
                if (existing) {
                    Object.keys(existing)
                        .filter(function (key) { return next[key] === undefined; })
                        .forEach(function (key) { return delete existing[key]; });
                    var newProps = Object.keys(next)
                        .filter(function (key) { return existing[key] === undefined; })
                        .reduce(function (acc, key) {
                        var _a;
                        return (__assign(__assign({}, acc), (_a = {}, _a[key] = next[key], _a)));
                    }, {});
                    Object.assign(existing, next);
                    mobx_1.extendObservable(existing, newProps);
                }
                else {
                    map.set(op.name, next);
                }
            });
        });
        // Delete any items which are no longer present.
        map.forEach(function ($, key) {
            if (!keys.has(key))
                map.delete(key);
        });
        return [context.id];
    };
    Object.defineProperty(PageEditStore.prototype, "contextMenuOptions", {
        get: function () {
            var _this = this;
            var options = [];
            var contextIds = Array.from(this.optionMap.keys());
            contextIds.forEach(function (contextId) {
                var optionMap = _this.optionMap.get(contextId);
                var nextOptions = Array.from(optionMap.values());
                options.push.apply(options, nextOptions);
            });
            return options;
        },
        enumerable: false,
        configurable: true
    });
    PageEditStore.prototype.toggleEdit = function (on) {
        if (on === undefined) {
            this.isEdit = !this.isEdit;
        }
        else {
            this.isEdit = Boolean(on);
        }
        SessionStorage_1.saveToSessionStorage('isEdit', this.isEdit);
    };
    PageEditStore.prototype.togglePosition = function (on) {
        if (on === undefined) {
            this.isPositionToggled = !this.isPositionToggled;
        }
        else {
            this.isPositionToggled = Boolean(on);
        }
        SessionStorage_1.saveToSessionStorage('isPositionToggled', this.isPositionToggled);
    };
    Object.defineProperty(PageEditStore.prototype, "contextTrail", {
        get: function () {
            var trail = [];
            for (var c = this.activeContext; c === null || c === void 0 ? void 0 : c.parent; c = c.parent) {
                trail.push(c.id);
            }
            return trail;
        },
        enumerable: false,
        configurable: true
    });
    PageEditStore.prototype.toggleLocalTooltipsDisabled = function (isDisabled) {
        if (isDisabled === undefined) {
            this.areLocalTooltipsDisabled = !this.areLocalTooltipsDisabled;
        }
        else {
            this.areLocalTooltipsDisabled = isDisabled;
        }
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], PageEditStore.prototype, "activeContext", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], PageEditStore.prototype, "isEdit", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], PageEditStore.prototype, "isPositionToggled", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], PageEditStore.prototype, "pageOverlay", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], PageEditStore.prototype, "optionMap", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PageEditStore.prototype, "reset", null);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PageEditStore.prototype, "setActiveContext", null);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PageEditStore.prototype, "updateMenuOptions", null);
    __decorate([
        mobx_1.computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], PageEditStore.prototype, "contextMenuOptions", null);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], PageEditStore.prototype, "toggleEdit", null);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], PageEditStore.prototype, "togglePosition", null);
    __decorate([
        mobx_1.computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PageEditStore.prototype, "contextTrail", null);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], PageEditStore.prototype, "areLocalTooltipsDisabled", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], PageEditStore.prototype, "toggleLocalTooltipsDisabled", null);
    return PageEditStore;
}());
exports.PageEditStore = PageEditStore;
exports.defaultStore = new PageEditStore();
//# sourceMappingURL=Store.js.map