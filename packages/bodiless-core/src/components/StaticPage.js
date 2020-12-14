"use strict";
/* eslint-disable class-methods-use-this */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PageEditContext_1 = __importDefault(require("../PageEditContext"));
var StaticContext = /** @class */ (function () {
    function StaticContext() {
        var _this = this;
        this.areLocalTooltipsDisabled = true;
        this.isActive = false;
        this.isInnermost = false;
        this.hasLocalMenu = false;
        this.activate = function () { return undefined; };
        this.updateMenuOptions = function () { return undefined; };
        this.refresh = function () { return undefined; };
        this.isEdit = false;
        this.toggleEdit = function () { return undefined; };
        this.isPositionToggled = false;
        this.togglePosition = function () { return undefined; };
        this.peerContexts = [];
        this.contextMenuOptions = [];
        this.name = 'Static';
        this.id = 'static';
        this.isInnermostLocalMenu = false;
        this.pageOverlay = {
            data: {},
            timeoutId: 0,
        };
        this.getMenuOptions = function () { return []; };
        this.showPageOverlay = function () { return undefined; };
        this.hidePageOverlay = function () { return undefined; };
        this.showError = function () { return undefined; };
        // Normally spawn returns a new context instance, but in a static page there is only a single
        // constext, so we just return ourselves.
        this.spawn = function () { return _this; };
        this.registerPeer = function () { };
        this.unregisterPeer = function () { };
        this.allMenuOptions = [];
    }
    StaticContext.prototype.toggleLocalTooltipsDisabled = function () { };
    return StaticContext;
}());
var staticContext = new StaticContext();
var StaticPage = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(PageEditContext_1.default.Provider, { value: staticContext }, children));
};
exports.default = StaticPage;
//# sourceMappingURL=StaticPage.js.map