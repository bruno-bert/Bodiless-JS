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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUI = void 0;
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
var react_1 = __importStar(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var ContextMenu_1 = __importDefault(require("./ContextMenu"));
var hooks_1 = require("../hooks");
var PageContextProvider_1 = require("../PageContextProvider");
var uiContext = react_1.createContext({
    GlobalContextMenu: ContextMenu_1.default,
    LocalContextMenu: ContextMenu_1.default,
});
exports.useUI = function () { return react_1.useContext(uiContext); };
var GlobalContextMenu = mobx_react_lite_1.observer(function () {
    var Menu = exports.useUI().GlobalContextMenu;
    var context = hooks_1.useEditContext();
    var isPositionToggled = context.isPositionToggled, contextMenuOptions = context.contextMenuOptions;
    var options = contextMenuOptions.filter(function (op) { return op.global !== false; });
    return (react_1.default.createElement(Menu, { options: options, isPositionToggled: isPositionToggled }));
});
/**
 * Component providing the global Bodiless UI elements, the Main Menu and Page Overlay.
 * Also provides the Edit and Docs buttons on the main menu.
 */
var PageEditor = function (_a) {
    var children = _a.children, ui = _a.ui;
    var context = hooks_1.useEditContext();
    var getMenuOptions = react_1.useCallback(function () { return [
        {
            name: 'docs',
            icon: 'description',
            label: 'Docs',
            handler: function () {
                window.open(process.env.BODILESS_DOCS_URL, '_blank');
            },
        },
        {
            name: 'edit',
            icon: 'edit',
            label: 'Edit',
            // We use a callback here to get the latest value from the context.
            isActive: function () { return context.isEdit; },
            handler: function () {
                context.toggleEdit();
            },
        },
    ]; }, []);
    var newUI = __assign(__assign({}, exports.useUI()), ui);
    var _b = newUI.PageOverlay, PageOverlay = _b === void 0 ? function () { return null; } : _b;
    // Register buttons to the main menu.
    PageContextProvider_1.useRegisterMenuOptions({
        getMenuOptions: getMenuOptions,
        name: 'Editor',
    });
    react_1.useEffect(function () { if (!context.isActive)
        context.activate(); }, []);
    return (react_1.default.createElement(uiContext.Provider, { value: newUI },
        children,
        react_1.default.createElement(GlobalContextMenu, null),
        react_1.default.createElement(PageOverlay, null)));
};
exports.default = mobx_react_lite_1.observer(PageEditor);
//# sourceMappingURL=PageEditor.js.map