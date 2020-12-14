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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mobx_react_1 = require("mobx-react");
var Store_1 = require("./Store");
/**
 * A Page Edit Context represents a particular state of the page editor, usually
 * defined by what element of the page is "active" or "focused". Currently, the
 * only bit of state tracked in the context are context menu options (along with
 * whether a context is "active", which can be used to highlight the component
 * which registered the context.
 * - Contexts are nested (so that a parent context is "active" when any of
 * its child contexts are active).
 * - Contexts are established using the React context API - and each PageEditContext
 * instance is a "value".
 * - The PageEditContext instance also contains a reference to the page edit store,
 * which tracks editor UI state (eg the currently active context).
 * - The react context container (created by React.createContext) of which the
 * PageEditContext instance is a value is available as a static property of the class via:
 *    - PageEditContext.context (the context object, suitable for use as a component contextType).
 *    - PageEditContext.Consumer (an observable version of PageEditContext.context.Consumer).
 *    - PageEditContext.Provider (equivalent to PageEditContext.context.Provider).
 * Singleton store.
 */
var PageEditContext = /** @class */ (function () {
    // When called with no argument this creates a new store and react context.
    function PageEditContext(values, parent) {
        this.id = 'Root';
        this.name = 'Root';
        this.getMenuOptions = function () { return []; };
        this.store = Store_1.defaultStore;
        this.hasLocalMenu = false;
        this.peerContextMap = new Map();
        if (values) {
            this.id = values.id;
            this.name = values.name || values.id;
            if (values.getMenuOptions)
                this.getMenuOptions = values.getMenuOptions;
            if (values.type)
                this.type = values.type;
        }
        if (parent) {
            this.parent = parent;
        }
    }
    Object.defineProperty(PageEditContext.prototype, "peerContexts", {
        get: function () {
            // Cast is necessary bc ts can't figure out that the filter removes all the nulls.
            return Array.from(this.peerContextMap.values()).filter(Boolean);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Registers a context as a peer.  Peer contexts contribute their menu options whenever the
     * context to which they are registered is activated.
     *
     * @param context The peer context to register.
     */
    PageEditContext.prototype.registerPeer = function (context) {
        this.peerContextMap.set(context.id, context);
    };
    /**
     * Marks a peer context as "unregistered".  An unregistered peer will not contribute
     * its menu options.
     *
     * @param context The peer context to unregister.
     */
    PageEditContext.prototype.unregisterPeer = function (context) {
        if (this.peerContextMap.has(context.id)) {
            // We mark it as unregistered instead of deleting it in order to preserve
            // the original insertion order if/when it is added back.
            this.peerContextMap.set(context.id, null);
        }
    };
    PageEditContext.prototype.unregisterPeers = function () {
        this.peerContextMap = new Map();
    };
    // Create a new context value with this as its parent.
    PageEditContext.prototype.spawn = function (values) {
        return new PageEditContext(values, this);
    };
    // Make this the "current" context.
    PageEditContext.prototype.activate = function () {
        this.store.setActiveContext(this);
    };
    PageEditContext.prototype.updateMenuOptions = function () {
        this.store.updateMenuOptions(this);
    };
    Object.defineProperty(PageEditContext.prototype, "isActive", {
        // Tests whether this context is "active" - i.e. whether it or one of its descendants is the
        // "current" context.
        get: function () {
            return !this.parent || this.store.contextTrail.includes(this.id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageEditContext.prototype, "isInnermost", {
        get: function () {
            return Boolean(this.store.activeContext && this.store.activeContext.id === this.id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageEditContext.prototype, "activeContext", {
        get: function () {
            return this.store.activeContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageEditContext.prototype, "activeDescendants", {
        get: function () {
            var trail = [];
            for (var c = this.activeContext; c; c = c.parent) {
                if (c === this)
                    return trail.reverse();
                trail.push(c);
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageEditContext.prototype, "isInnermostLocalMenu", {
        get: function () {
            var getId = function (context) {
                if (context.hasLocalMenu)
                    return context.id;
                if (context.parent)
                    return getId(context.parent);
                return '';
            };
            return Boolean(this.hasLocalMenu
                && this.store.activeContext
                && getId(this.store.activeContext) === this.id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageEditContext.prototype, "isEdit", {
        get: function () {
            return this.store.isEdit;
        },
        enumerable: false,
        configurable: true
    });
    PageEditContext.prototype.toggleEdit = function (on) {
        this.store.toggleEdit(on);
    };
    Object.defineProperty(PageEditContext.prototype, "isPositionToggled", {
        get: function () {
            return this.store.isPositionToggled;
        },
        enumerable: false,
        configurable: true
    });
    PageEditContext.prototype.togglePosition = function (on) {
        this.store.togglePosition(on);
    };
    Object.defineProperty(PageEditContext.prototype, "contextMenuOptions", {
        get: function () {
            return this.store.contextMenuOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageEditContext.prototype, "optionMap", {
        get: function () {
            return this.store.optionMap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageEditContext.prototype, "pageOverlay", {
        get: function () {
            return this.store.pageOverlay;
        },
        enumerable: false,
        configurable: true
    });
    PageEditContext.prototype.showPageOverlay = function (passedSettings) {
        var _this = this;
        clearTimeout(this.store.pageOverlay.timeoutId);
        var settings = __assign(__assign(__assign({}, Store_1.defaultOverlaySettings), { isActive: true }), passedSettings);
        this.store.pageOverlay.data = settings;
        if (settings.maxTimeoutInSeconds) {
            this.store.pageOverlay.timeoutId = window.setTimeout(function () {
                _this.showError({
                    message: "The application encountered an issue.\nPlease try your operation again if it was not successful.",
                });
            }, settings.maxTimeoutInSeconds * 1000);
        }
    };
    PageEditContext.prototype.hidePageOverlay = function () {
        this.showPageOverlay({
            isActive: false,
        });
    };
    PageEditContext.prototype.showError = function (passedSettings) {
        var settings = __assign({ message: 'An error has occurred.', hasCloseButton: true, hasSpinner: false }, passedSettings);
        this.showPageOverlay(settings);
    };
    Object.defineProperty(PageEditContext.prototype, "areLocalTooltipsDisabled", {
        get: function () {
            return this.store.areLocalTooltipsDisabled || !this.store.isEdit;
        },
        enumerable: false,
        configurable: true
    });
    PageEditContext.prototype.toggleLocalTooltipsDisabled = function (isDisabled) {
        this.store.toggleLocalTooltipsDisabled(isDisabled);
    };
    PageEditContext.root = new PageEditContext();
    PageEditContext.context = react_1.default.createContext(PageEditContext.root);
    // Make our context consumer observable.
    // See https://github.com/mobxjs/mobx-react/issues/471.
    // eslint-disable-next-line react/prop-types
    PageEditContext.Consumer = function (_a) {
        var children = _a.children;
        return (react_1.default.createElement(PageEditContext.context.Consumer, null, function (value) { return react_1.default.createElement(mobx_react_1.Observer, null, function () { return children(value); }); }));
    };
    PageEditContext.Provider = PageEditContext.context.Provider;
    return PageEditContext;
}());
exports.default = PageEditContext;
//# sourceMappingURL=index.js.map