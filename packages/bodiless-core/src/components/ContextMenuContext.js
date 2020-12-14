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
exports.getUI = exports.useMenuOptionUI = exports.useContextMenuContext = void 0;
var react_1 = __importStar(require("react"));
var informed_1 = require("informed");
var rc_tooltip_1 = __importDefault(require("rc-tooltip"));
var lodash_1 = require("lodash");
var ReactTagsField_1 = __importDefault(require("./ReactTagsField"));
var DefaultToolbarButton = function (props) { return (react_1.default.createElement("div", __assign({}, lodash_1.omit(props, 'isActive', 'isDisabled', 'isFirst')))); };
var defaultUI = {
    Icon: function (props) { return react_1.default.createElement("i", __assign({}, lodash_1.omit(props, 'isActive'))); },
    ComponentFormTitle: 'h3',
    ComponentFormLabel: 'label',
    ComponentFormButton: 'button',
    ComponentFormCloseButton: 'button',
    ComponentFormSubmitButton: 'button',
    ComponentFormUnwrapButton: 'button',
    ComponentFormText: informed_1.Text,
    ComponentFormTextArea: informed_1.TextArea,
    ComponentFormError: 'div',
    ComponentFormWarning: 'div',
    ComponentFormLink: 'a',
    Form: 'form',
    ReactTags: ReactTagsField_1.default,
    ComponentFormList: 'ul',
    ComponentFormListItem: 'li',
    ComponentFormDescription: 'div',
    ContextSubMenu: react_1.default.Fragment,
    HorizontalToolbarButton: DefaultToolbarButton,
    ToolbarButton: DefaultToolbarButton,
    FormWrapper: 'div',
    ToolbarDivider: 'div',
    Tooltip: rc_tooltip_1.default,
    Toolbar: 'div',
    ContextMenuGroup: function (_a) {
        var children = _a.children, key = _a.key;
        return (react_1.default.createElement(react_1.default.Fragment, { key: key }, children));
    },
    ToolbarButtonLabel: 'span',
    ComponentFormRadio: informed_1.Radio,
    ComponentFormRadioGroup: informed_1.RadioGroup,
    ComponentFormCheckBox: informed_1.Checkbox,
    ComponentFormFieldTitle: 'title',
    ComponentFormOption: informed_1.Option,
    ComponentFormSelect: informed_1.Select,
    ComponentFormFieldWrapper: 'div',
};
var getUI = function (ui) {
    if (ui === void 0) { ui = {}; }
    return (__assign(__assign({}, defaultUI), ui));
};
exports.getUI = getUI;
var ContextMenuContext = react_1.createContext({});
var ContextMenuUIContext = react_1.createContext({});
var useContextMenuContext = function () { return react_1.useContext(ContextMenuContext); };
exports.useContextMenuContext = useContextMenuContext;
var useMenuOptionUI = function () { return getUI(react_1.useContext(ContextMenuUIContext)); };
exports.useMenuOptionUI = useMenuOptionUI;
var ContextMenuProvider = function (_a) {
    var children = _a.children, setRenderForm = _a.setRenderForm, ui = _a.ui;
    return (react_1.default.createElement(ContextMenuUIContext.Provider, { value: getUI(ui) },
        react_1.default.createElement(ContextMenuContext.Provider, { value: { setRenderForm: setRenderForm } }, children)));
};
exports.default = ContextMenuProvider;
//# sourceMappingURL=ContextMenuContext.js.map