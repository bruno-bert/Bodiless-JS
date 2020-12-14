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
exports.OverlayPortal = exports.Overlay = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var mobx_react_1 = require("mobx-react");
var hooks_1 = require("../hooks");
var defaultUI = {
    OverlayWrapper: 'div',
    PopupWrapper: 'div',
    Button: 'button',
    Spinner: 'div',
    Message: 'div',
};
var getUI = function (ui) { return (__assign(__assign({}, defaultUI), ui)); };
exports.Overlay = function (_a) {
    var settings = _a.settings, ui = _a.ui;
    var OverlayWrapper = ui.OverlayWrapper, PopupWrapper = ui.PopupWrapper, Button = ui.Button, Spinner = ui.Spinner, Message = ui.Message;
    var message = settings.message, hasCloseButton = settings.hasCloseButton, hasSpinner = settings.hasSpinner, onClose = settings.onClose;
    var context = hooks_1.useEditContext();
    var CloseButton = function (props) { return (react_1.default.createElement(Button, __assign({ onClick: function () {
            context.hidePageOverlay();
            if (onClose) {
                onClose();
            }
        } }, props))); };
    var Elements = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
        hasCloseButton && react_1.default.createElement(CloseButton, null),
        hasSpinner && react_1.default.createElement(Spinner, null),
        react_1.default.createElement(Message, null, message))); };
    var WrappedElements = function () { return (react_1.default.createElement(PopupWrapper, null,
        react_1.default.createElement(Elements, null))); };
    return (
    // Stop click propagation to the native document click
    react_1.default.createElement(OverlayWrapper, { onClick: function (e) { return e.nativeEvent.stopImmediatePropagation(); } }, hasCloseButton ? react_1.default.createElement(WrappedElements, null) : react_1.default.createElement(Elements, null)));
};
exports.OverlayPortal = mobx_react_1.observer(function (_a) {
    var store = _a.store, ui = _a.ui;
    var root = typeof window !== 'undefined' ? window.document.body : null;
    return store.data.isActive
        && root
        && react_dom_1.default.createPortal(react_1.default.createElement(exports.Overlay, { settings: __assign({}, store.data), ui: ui }), root);
});
var PageOverlay = function (_a) {
    var ui = _a.ui;
    var uiWithDefaults = getUI(ui);
    var pageOverlayStore = hooks_1.useEditContext().pageOverlay;
    return react_1.default.createElement(exports.OverlayPortal, { store: pageOverlayStore, ui: uiWithDefaults });
};
exports.default = PageOverlay;
//# sourceMappingURL=PageOverlay.js.map