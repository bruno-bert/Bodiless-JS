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
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextMenuForm = exports.ContextMenuForm = exports.FormChrome = void 0;
var react_1 = __importStar(require("react"));
var informed_1 = require("informed");
var lodash_1 = require("lodash");
var hoc_1 = require("./hoc");
var ContextMenuContext_1 = require("./components/ContextMenuContext");
var FormChromeBase = function (props) {
    var children = props.children, title = props.title, description = props.description, hasSubmit = props.hasSubmit, closeForm = props.closeForm;
    var _a = ContextMenuContext_1.useMenuOptionUI(), ComponentFormTitle = _a.ComponentFormTitle, ComponentFormCloseButton = _a.ComponentFormCloseButton, ComponentFormSubmitButton = _a.ComponentFormSubmitButton, ComponentFormDescription = _a.ComponentFormDescription;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ComponentFormCloseButton, { type: "button", "aria-label": "Cancel", onClick: function (e) { return closeForm(e); }, "data-bl-component-form-close-button": true }),
        title && react_1.default.createElement(ComponentFormTitle, null, title),
        description && react_1.default.createElement(ComponentFormDescription, null, description),
        children,
        hasSubmit && (react_1.default.createElement(ComponentFormSubmitButton, { "aria-label": "Submit" }))));
};
exports.FormChrome = lodash_1.flow(hoc_1.withClickOutside)(FormChromeBase);
exports.ContextMenuForm = function (props) {
    var closeForm = props.closeForm, onClose = props.onClose, ui = props.ui, _a = props.submitValues, submitValues = _a === void 0 ? function () { return undefined; } : _a, _b = props.initialValues, initialValues = _b === void 0 ? {} : _b, _c = props.hasSubmit, hasSubmit = _c === void 0 ? true : _c, _d = props.children, children = _d === void 0 ? function () { return react_1.default.createElement(react_1.default.Fragment, null); } : _d, title = props.title, description = props.description, rest = __rest(props, ["closeForm", "onClose", "ui", "submitValues", "initialValues", "hasSubmit", "children", "title", "description"]);
    var callOnClose = function (e, values) {
        if (typeof onClose === 'function') {
            onClose(values);
        }
        closeForm(e);
    };
    return (react_1.default.createElement(informed_1.Form, __assign({ onSubmit: function (values) {
            if (!submitValues(values)) {
                callOnClose(null, values);
            }
        }, initialValues: initialValues }, rest), function (_a) {
        var formApi = _a.formApi, formState = _a.formState;
        return (react_1.default.createElement(exports.FormChrome, { onClickOutside: function (e) { return callOnClose(e, formState.values); }, hasSubmit: typeof hasSubmit === 'function'
                ? hasSubmit(formState.values) && !formState.invalid
                : hasSubmit && !formState.invalid, closeForm: function (e) { return callOnClose(e, formState.values); }, title: title, description: description }, typeof children === 'function'
            ? children({
                closeForm: closeForm, formApi: formApi, formState: formState, ui: ui,
            })
            : children));
    }));
};
exports.contextMenuForm = function (options) {
    if (options === void 0) { options = {}; }
    return function (renderForm) { return (function (props) { return (react_1.default.createElement(exports.ContextMenuForm, __assign({}, options, props), renderForm || (function () { return react_1.default.createElement(react_1.default.Fragment, null); }))); }); };
};
var useContextMenuForm = function (options) {
    if (options === void 0) { options = {}; }
    var renderForm = options.renderForm, rest = __rest(options, ["renderForm"]);
    return react_1.useCallback(exports.contextMenuForm(rest)(renderForm), [options]);
};
exports.default = useContextMenuForm;
//# sourceMappingURL=contextMenuForm.js.map