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
/* eslint-disable no-nested-ternary */
var react_1 = __importDefault(require("react"));
var fclasses_1 = require("@bodiless/fclasses");
var ContextMenuItem_1 = __importDefault(require("../components/ContextMenuItem"));
var ContextMenu_1 = require("../components/ContextMenu");
var ContextMenuContext_1 = require("../components/ContextMenuContext");
var contextMenuForm_1 = require("../contextMenuForm");
var ContextSubMenu = function (props) {
    var option$ = props.option, name = props.name, children = props.children, rest = __rest(props, ["option", "name", "children"]);
    var option = option$ || { name: name };
    var HorizontalToolbarButton = ContextMenuContext_1.useMenuOptionUI().HorizontalToolbarButton;
    var finalUi = __assign(__assign({}, ContextMenuContext_1.useMenuOptionUI()), { Toolbar: fclasses_1.addProps({ 'aria-label': "Context Submenu " + option.label + " form" })(fclasses_1.Div), ToolbarButton: HorizontalToolbarButton });
    var SubMenu = finalUi.ContextSubMenu;
    var title = option.label ? (typeof option.label === 'function' ? option.label() : option.label) : '';
    var handler = function () { return function (_a) {
        var closeForm = _a.closeForm;
        return (react_1.default.createElement(ContextMenu_1.ContextMenuBase, { ui: finalUi, renderInTooltip: false, closeForm: closeForm },
            react_1.default.createElement(contextMenuForm_1.FormChrome, __assign({ title: title, hasSubmit: false, closeForm: closeForm, onClickOutside: closeForm }, rest),
                react_1.default.createElement(SubMenu, null, children))));
    }; };
    var newOption = __assign(__assign({}, option), { handler: handler });
    return react_1.default.createElement(ContextMenuItem_1.default, __assign({ option: newOption, name: option.name }, rest));
};
exports.default = ContextSubMenu;
//# sourceMappingURL=ContextSubMenu.js.map