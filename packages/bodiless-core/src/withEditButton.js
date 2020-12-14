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
exports.useEditFormProps = exports.createMenuOptionGroup = void 0;
var lodash_1 = require("lodash");
var hoc_1 = require("./hoc");
var contextMenuForm_1 = __importDefault(require("./contextMenuForm"));
var PageContextProvider_1 = require("./PageContextProvider");
var withCompoundForm_1 = __importDefault(require("./withCompoundForm"));
/**
 * Given a base option, creates a pair of menu options including
 * the base option and a group which contains it.
 *
 * @param baseOption The option for which to create the group.
 *
 * @return The base option and a group which contains it.
 */
exports.createMenuOptionGroup = function (baseOption) {
    var groupLabel = baseOption.groupLabel, groupMerge = baseOption.groupMerge, menuOption = __rest(baseOption, ["groupLabel", "groupMerge"]);
    var menuGroup = {
        name: menuOption.name + "-group",
        label: groupLabel || menuOption.label,
        groupMerge: groupMerge || 'none',
        local: menuOption.local,
        global: menuOption.global,
        Component: 'group',
    };
    menuOption.group = menuGroup.name;
    return [menuOption, menuGroup];
};
/**
 * Generates required props to pass to `ContextMenuForm`
 * using the normal bodiless data handlers. For example:
 * ```
 * const useMyContextMenuForm = props => (
 *   const render = () => (
 *     <ContextMenuForm {..useEditFormProps(props)}>
 *       // Custom form components
 *     </ContextMenuForm>
 *   );
 *   // use this render to provide a menu button.
 * );
 * ```
 * Alternatively you can pass an additional renderForm callback
 * to generate props suitable for `useEditForm`:
 * ```
 * const WithMyContextMenuForm = props => (
 *   const renderForm = () => // Custom form components
 *   const render = useContextMenuForm(useEditFormProps({ ...props, renderForm }));
 *   // use this render to provide a menu button.
 * };
 * ```
 *
 * @param props The props passed to the component providing the form.
 *
 * @return Props suitable for passing to ContextMenuForm.
 */
exports.useEditFormProps = function (props) {
    var initialValues$ = props.componentData, setComponentData = props.setComponentData, onSubmit = props.onSubmit, initialValueHandler = props.initialValueHandler, submitValueHandler = props.submitValueHandler, renderForm$ = props.renderForm;
    var initialValues = initialValueHandler
        ? initialValueHandler(initialValues$) : initialValues$;
    var submitValues$ = function (values) {
        setComponentData(values);
        if (onSubmit)
            onSubmit();
    };
    var submitValues = submitValueHandler
        ? lodash_1.flowRight(submitValues$, submitValueHandler) : submitValues$;
    if (renderForm$) {
        // Pass component props to the render function.
        var renderForm = function (p) { return renderForm$(__assign(__assign({}, p), { 
            // @TODO: Avoid passing all the props.
            componentProps: props })); };
        return { initialValues: initialValues, submitValues: submitValues, renderForm: renderForm };
    }
    return { initialValues: initialValues, submitValues: submitValues };
};
var createMenuOptionHook = function (options) { return function (props) {
    var options$ = typeof options === 'function' ? options(props) : options;
    var renderForm = options$.renderForm, initialValueHandler = options$.initialValueHandler, submitValueHandler = options$.submitValueHandler, rest = __rest(options$, ["renderForm", "initialValueHandler", "submitValueHandler"]);
    var isActive = props.isActive;
    var render = contextMenuForm_1.default(exports.useEditFormProps(__assign(__assign({}, props), { renderForm: renderForm,
        initialValueHandler: initialValueHandler,
        submitValueHandler: submitValueHandler })));
    var menuOption = __assign(__assign({}, rest), { handler: function () { return render; } });
    if (isActive)
        menuOption.isActive = isActive;
    return exports.createMenuOptionGroup(menuOption);
}; };
/**
 * Uses the provided options to create an HOC which adds an edit button provider
 * to the wrapped component.
 *
 * @param options The options defining the edit button.
 *
 * @return An HOC which will add an edit button for the wrapped component.
 */
var withEditButton = function (options) {
    var isCompoundForm = typeof options === 'object'
        && options.useCompoundForm !== undefined
        && options.useCompoundForm();
    var withMenuOptions$ = isCompoundForm
        ? withCompoundForm_1.default({
            useMenuOptions: createMenuOptionHook(options),
            name: "Edit " + options.name,
        })
        : PageContextProvider_1.withMenuOptions({
            useMenuOptions: createMenuOptionHook(options),
            name: "Edit" + options.name,
        });
    return lodash_1.flowRight(withMenuOptions$, hoc_1.withoutProps(['setComponentData', 'isActive']));
};
exports.default = withEditButton;
//# sourceMappingURL=withEditButton.js.map