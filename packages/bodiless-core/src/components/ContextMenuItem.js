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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-nested-ternary */
var react_1 = __importStar(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var hooks_1 = require("../hooks");
var ContextMenuContext_1 = require("./ContextMenuContext");
var ContextMenuItem = mobx_react_lite_1.observer(function (props) {
    var option$ = props.option, name = props.name, index = props.index;
    var option = option$ || { name: name };
    var _a = react_1.useState(), renderForm = _a[0], setRenderForm$ = _a[1];
    var _b = react_1.useState(false), isToolTipShown = _b[0], setIsToolTipShown = _b[1];
    var ui = ContextMenuContext_1.useMenuOptionUI();
    var ToolbarDivider = ui.ToolbarDivider, Icon = ui.Icon, ToolbarButton = ui.ToolbarButton, FormWrapper = ui.FormWrapper, Tooltip = ui.Tooltip, ToolbarButtonLabel = ui.ToolbarButtonLabel;
    var isActive = option.isActive ? (typeof option.isActive === 'function' ? option.isActive() : option.isActive) : false;
    var isDisabled = option.isDisabled ? (typeof option.isDisabled === 'function' ? option.isDisabled() : option.isDisabled) : false;
    var isHidden = option.isHidden ? (typeof option.isHidden === 'function' ? option.isHidden() : option.isHidden) : false;
    var label = option.label ? (typeof option.label === 'function' ? option.label() : option.label) : '';
    var ariaLabel = option.ariaLabel ? (typeof option.ariaLabel === 'function' ? option.ariaLabel() : option.ariaLabel) : (label || option.name);
    var icon = option.icon ? (typeof option.icon === 'function' ? option.icon() : option.icon) : '';
    var title = typeof option.formTitle === 'function' ? option.formTitle() : option.formTitle;
    var description = typeof option.formDescription === 'function' ? option.formDescription() : option.formDescription;
    var activateContext = option.activateContext
        ? (typeof option.activateContext === 'function'
            ? option.activateContext()
            : option.activateContext)
        : option.activateContext !== false;
    var isFirst = index === 0;
    var setRenderForm = ContextMenuContext_1.useContextMenuContext().setRenderForm || setRenderForm$;
    var context = hooks_1.useEditContext();
    var onToolbarButtonClick = function (event) {
        var menuForm = option.handler ? option.handler(event) : undefined;
        if (activateContext)
            context.activate();
        if (menuForm) {
            if (!option.local)
                context.toggleLocalTooltipsDisabled(!context.areLocalTooltipsDisabled);
            setIsToolTipShown(!isToolTipShown);
            // We have to pass a function to setRenderForm b/c menuForm is itself a function
            // (a render prop) and, when a function is passed to setState, react interprets
            // it as a state setter (in order to set state based on previous state)
            // see https://reactjs.org/docs/hooks-reference.html#functional-updates
            setRenderForm(function () { return menuForm; });
        }
    };
    // Reset form and tooltip state
    var onFormClose = function () {
        context.toggleLocalTooltipsDisabled(false);
        setIsToolTipShown(false);
        setRenderForm(undefined);
    };
    function getContextMenuForm() {
        if (renderForm) {
            var formProps = {
                closeForm: onFormClose,
                ui: ui,
                'aria-label': "Context Menu " + ariaLabel + " Form",
                title: title,
                description: description,
            };
            return (react_1.default.createElement(FormWrapper, { onClick: function (e) { return e.stopPropagation(); } }, renderForm(formProps)));
        }
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    if (option.name.startsWith('__divider')) {
        return react_1.default.createElement(ToolbarDivider, null);
    }
    if (isHidden) {
        return null;
    }
    return (react_1.default.createElement(Tooltip, { trigger: ['click'], overlay: getContextMenuForm(), visible: isToolTipShown, destroyTooltipOnHide: true },
        react_1.default.createElement(ToolbarButton, { isActive: isActive, isDisabled: isDisabled, isFirst: isFirst, onClick: onToolbarButtonClick, "aria-label": ariaLabel || label || option.name },
            react_1.default.createElement(Icon, { isActive: isActive || isToolTipShown }, icon),
            (label) ? (react_1.default.createElement(ToolbarButtonLabel, null, label)) : (null))));
});
exports.default = ContextMenuItem;
//# sourceMappingURL=ContextMenuItem.js.map