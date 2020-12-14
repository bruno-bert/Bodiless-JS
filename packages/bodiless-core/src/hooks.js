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
exports.useLocalStorage = exports.useClickOutside = exports.useGetter = exports.useContextActivator = exports.useExtendHandler = exports.useUUID = exports.useEditContext = void 0;
var react_1 = require("react");
var uuid_1 = require("uuid");
var PageEditContext_1 = __importDefault(require("./PageEditContext"));
exports.useEditContext = function () { return react_1.useContext(PageEditContext_1.default.context); };
exports.useUUID = function () { return react_1.useRef(uuid_1.v1()).current; };
/**
 * Utility hook to extend an existing handler.
 * Only applies the extension when in edit mode.
 *
 * @param event The name of the event whose handler is to be extended
 * @param extender Function to extend the existing handler. Will be called second.
 * @param props The props of the component which may contain an original handler.
 *
 * @return An object of the form { event: extendedHandler }.
 */
exports.useExtendHandler = function (event, extender, props) {
    var _a;
    var _b = props, _c = event, handler = _b[_c];
    var context = exports.useEditContext();
    var handler$1 = react_1.useCallback(function (e) {
        // Run the original handler, if it exists.
        if (handler)
            handler(e);
        extender(e);
    }, [handler, extender]);
    // Don't extend the handler when not in edit mode.
    return _a = {},
        _a[event] = context.isEdit ? handler$1 : handler,
        _a;
};
exports.useContextActivator = function (event, handler) {
    var _a;
    if (event === void 0) { event = 'onClick'; }
    var context = exports.useEditContext();
    var extender = react_1.useCallback(function (e) {
        // Do not activate the context if it is already innermost.
        if (context.isInnermost)
            return;
        // Do not activate if this event already activated an inner context.
        if (e.target) {
            var activatingElement = e.target.closest('[data-bl-activator=true]');
            var thisElement = e.currentTarget;
            if (thisElement !== activatingElement)
                return;
        }
        context.activate();
    }, [context, context.isEdit]);
    return __assign(__assign({}, exports.useExtendHandler(event, extender, (_a = {}, _a[event] = handler, _a))), { 'data-bl-activator': true });
};
/**
 * @private
 *
 * Utility hook to properly memoize a getter function so that the function itself is invariant,
 * but the return value can change. Useful when you want to prevent re-render of components
 * which use the getter every time the return value changes.
 *
 * @param value The current value to be returned by the getter.
 *
 * @return A memoized getter function which will return the current value
 */
exports.useGetter = function (value) {
    var ref = react_1.useRef();
    var getter = react_1.useCallback(function () { return ref.current; }, []);
    ref.current = value;
    return getter;
};
/**
 *
 * Utility hook to detect click outside of the `ref` element and execute a callback.
 * This HOC also adds an Escape button listner and will execute a callback on the `esc` keypress.
 *
 * Usage:
 *
 * ```js
 * useClickOutside(ref, () => {
 *   alert('Clicked outside');
 * });
 * ```
 *
 * @param ref Is a ref to the object we are clicking outside created via useRef() or createRef().
 * @param callback A callback to execute when click outside is detected.
 *
 */
exports.useClickOutside = function (ref, callback) {
    var escapeListener = react_1.useCallback(function (e) {
        if (e.key === 'Escape') {
            callback(e);
        }
    }, []);
    var clickListener = react_1.useCallback(function (e) {
        // Prevent click outside when page loading overlay is active
        if (e.target instanceof Element && e.target.id === 'page-overlay')
            return;
        if (ref.current && !ref.current.contains(e.target)) {
            callback(e);
        }
    }, []);
    react_1.useEffect(function () {
        document.body.addEventListener('mousedown', clickListener);
        document.body.addEventListener('keyup', escapeListener);
        return function () {
            document.body.removeEventListener('mousedown', clickListener);
            document.body.removeEventListener('keyup', escapeListener);
        };
    });
};
/**
 *
 * Utility hook to sync state to local storage so that it persists through a page refresh.
 * Usage is similar to useState except we pass in a local storage key so that
 * we can default to that value on page load instead of the specified initial value.
 *
 * @usage has the same API of useState

 *FilterWrapper.tsx @param key storage key like localStorage.getItem('key')
 * @param initialValue
 *
 */
exports.useLocalStorage = function (key, initialValue) {
    // Prevent build error "window is undefined" but keep keep working
    var isServer = typeof window === 'undefined';
    // Pass initial state function to useState so logic is only executed once
    var _a = react_1.useState(function () {
        // Get from local storage then parse stored json or return initialValue.
        if (isServer) {
            return initialValue;
        }
        try {
            var item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            /* eslint-disable no-console */
            console.log(error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = function (value) {
        try {
            // Allow value to be a function so we have same API as useState
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (!isServer) {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        }
        catch (error) {
            /* eslint-disable no-console */
            console.log(error);
        }
    };
    return [storedValue, setValue];
};
//# sourceMappingURL=hooks.js.map