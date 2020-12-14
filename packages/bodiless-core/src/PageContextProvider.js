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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withMenuOptions = exports.useRegisterMenuOptions = void 0;
var react_1 = __importStar(require("react"));
var PageEditContext_1 = __importDefault(require("./PageEditContext"));
var hooks_1 = require("./hooks");
/**
 * @private
 *
 *  Hook to create the values needed to define a new context from the supplied props.
 *
 * @param props The props defining the `PageEditContext`
 * @return Values suitable for passing to the `PageEditContext` constructor.
 */
var useNewContext = function (props, parent) {
    var getMenuOptions = props.getMenuOptions, name = props.name, id = props.id, type = props.type;
    var id$ = id || hooks_1.useUUID();
    var finalValues = {
        getMenuOptions: getMenuOptions,
        id: id$,
        name: name || id$,
        type: type,
    };
    return react_1.useMemo(function () { return (parent ? parent.spawn(finalValues) : new PageEditContext_1.default(finalValues)); }, [getMenuOptions, id, name, parent]);
};
/**
 * Hook which registers additional menu options for the current context.
 *
 * @param props Props which define the menu options to add.
 */
exports.useRegisterMenuOptions = function (props) {
    var context = hooks_1.useEditContext();
    var peerContext = useNewContext(props, context.parent);
    context.registerPeer(peerContext);
    // Handle unregistering from the current context if a component is removed through a
    // conditional render. We use a layout effect bc it and its cleanup both
    // execute before normal effects.  This allows us to unregister on unmount and re-register
    // on mount without updating menu options.  By the time we get to the normal effect
    // (which actually updates the menu options), if the component remounted, there will
    // appear to be no change, and menu options will not update.  But if the component
    // did not remount (was removed), then we go ahead and remove its options.
    var updateOnUnmount = react_1.useRef(false);
    react_1.useLayoutEffect(function () {
        // We re-register the peer when the component mounts.  We have to do it both here and in
        // render (above), bc we want the order of peers to be render order, not effect order.
        context.registerPeer(peerContext);
        updateOnUnmount.current = false;
        return function () {
            context.unregisterPeer(peerContext);
            updateOnUnmount.current = true;
        };
    });
    // In the normal effect, we update the menu options if the context is active.
    react_1.useEffect(function () {
        // When the component mounts,
        if (context.isActive) {
            context.updateMenuOptions();
        }
        return (function () {
            if (updateOnUnmount.current) {
                // If we get here, it means the component was unmounted and not remounted. In this case
                // we remove this peer from the current context.
                if (context.isActive) {
                    context.updateMenuOptions();
                }
            }
        });
    });
};
/**
 * Component which provides its children with a new `PageEditContext` using the specified
 * menu options.
 *
 * @param props
 */
var PageContextProvider = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var context = hooks_1.useEditContext();
    var newValue = useNewContext(rest, context);
    react_1.useEffect(function () {
        if (newValue.isActive)
            newValue.updateMenuOptions();
    });
    return (react_1.default.createElement(PageEditContext_1.default.Provider, { value: newValue }, children));
};
PageContextProvider.defaultProps = {
    getMenuOptions: function () { return []; },
};
/**
 * Using supplied options, returns an HOC which adds one or more menu options (buttons).
 * This simplly wraps the supplied component with a `PageContextProvider`.
 *
 * Note that, unlike `PageContexProvider` itself, this function takes a custom hook
 * (`useMenuOptions`), which is invoked to create the 'getMenuOptions' prop
 * for `PageContextProvider`.  This allows you to use props and context at render
 * time to create your `getMenuOptions` callback.
 *
 * Based on the value of the `peer` option, this will associate the menu options either
 * with a new local context (`peer === false`, the default), or with the existing one.
 *
 * @param def The definition of the menu options to be provided.
 *
 * @return An HOC which will cause the component it enhances to contribute the specified
 *         menu options when placed.
 */
exports.withMenuOptions = function (def$) { return (function (Component) {
    var WithMenuOptions = function (props) {
        var def = typeof def$ === 'function' ? def$(props) : def$;
        var useMenuOptions = def.useMenuOptions, peer = def.peer, rest = __rest(def, ["useMenuOptions", "peer"]);
        var options = useMenuOptions && useMenuOptions(props);
        var getMenuOptions = options ? hooks_1.useGetter(options) : undefined;
        if (peer) {
            exports.useRegisterMenuOptions(__assign({ getMenuOptions: getMenuOptions }, rest));
            return react_1.default.createElement(Component, __assign({}, props));
        }
        return (react_1.default.createElement(PageContextProvider, __assign({ getMenuOptions: getMenuOptions }, rest),
            react_1.default.createElement(Component, __assign({}, props))));
    };
    return WithMenuOptions;
}); };
exports.default = PageContextProvider;
//# sourceMappingURL=PageContextProvider.js.map