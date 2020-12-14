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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenuBase = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
var ContextMenuItem_1 = __importDefault(require("./ContextMenuItem"));
var StructuredChildren_1 = __importDefault(require("../ContextMenu/StructuredChildren"));
var ContextMenuContext_1 = __importStar(require("./ContextMenuContext"));
var getComponent = function (option, defaultComponents) {
    if (typeof option.Component === 'function')
        return option.Component;
    if (option.Component === 'group')
        return defaultComponents.group;
    return defaultComponents.item;
};
/**
 * @private
 * Converts an array of context menu option objects into an array of child components.
 *
 * @param options The array of options
 * @param defaultComponents Default components to be used when a component does not define one.
 */
var createChildrenFromOptions = function (options, defaultComponents) { return lodash_1.uniqBy((options || []).map(function (option) {
    var Component = getComponent(option, defaultComponents);
    return (react_1.default.createElement(Component, { option: option, group: option.group, name: option.name, key: option.name, "aria-label": option.name }));
}), 'key'); };
var ContextMenuBase = function (props) {
    if (typeof window === 'undefined')
        return null;
    var _a = react_1.useState(), renderForm = _a[0], setRenderForm = _a[1];
    var ui = props.ui, _b = props.renderInTooltip, renderInTooltip = _b === void 0 ? true : _b, closeForm = props.closeForm, children = props.children;
    var Toolbar = ContextMenuContext_1.getUI(ui).Toolbar;
    var closeMenuForm = function (e) {
        if (typeof closeForm === 'function') {
            closeForm(e);
        }
        else {
            setRenderForm(undefined);
        }
    };
    if (renderForm) {
        var formProps = {
            /**
             * Here we use `closeForm` handler from component props to close the form if
             * `e.target` is NOT a close button with `id="data-bl-component-form-close-button"`.
             *
             * For example, if we try to close the form by clicking outside of it,
             * it will try to execute `closeForm` from the component props first
             * and if it is not defined, it will just close the form using standard setRenderForm.
             */
            // eslint-disable-next-line no-confusing-arrow
            closeForm: function (e) { return e.currentTarget.hasAttribute('data-bl-component-form-close-button')
                ? setRenderForm(undefined)
                : closeMenuForm(e); },
            ui: ui,
            'aria-label': 'Context Submenu Form',
        };
        return renderForm(formProps);
    }
    if (children) {
        return (react_1.default.createElement(ContextMenuContext_1.default, { setRenderForm: renderInTooltip ? undefined : setRenderForm, ui: ui },
            react_1.default.createElement(Toolbar, { onClick: function (e) { return e.stopPropagation(); } }, children)));
    }
    return null;
};
exports.ContextMenuBase = ContextMenuBase;
var ContextMenu = function (props) {
    if (typeof window === 'undefined')
        return null;
    var options = props.options, ui = props.ui, children = props.children;
    var ContextMenuGroup = ContextMenuContext_1.getUI(ui).ContextMenuGroup;
    var childProps = { ui: ui };
    var childrenFromOptions = createChildrenFromOptions(options, { item: ContextMenuItem_1.default, group: ContextMenuGroup });
    var finalChildren = children
        ? __spreadArrays(react_1.default.Children.toArray(children).filter(react_1.default.isValidElement), childrenFromOptions) : childrenFromOptions;
    if (finalChildren.length > 0) {
        return (react_1.default.createElement(ContextMenuBase, __assign({}, props),
            react_1.default.createElement(StructuredChildren_1.default, __assign({ components: { Group: ContextMenuGroup } }, childProps), finalChildren)));
    }
    return null;
};
exports.default = ContextMenu;
//# sourceMappingURL=ContextMenu.js.map