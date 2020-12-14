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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegisterSnippet = void 0;
var react_1 = __importStar(require("react"));
var informed_1 = require("informed");
var lodash_1 = require("lodash");
var fclasses_1 = require("@bodiless/fclasses");
var contextMenuForm_1 = require("./contextMenuForm");
var PageContextProvider_1 = require("./PageContextProvider");
var Context = react_1.createContext(function () { });
var SnippetContext = react_1.createContext(undefined);
var defaultComponents = {
    Wrapper: react_1.default.Fragment,
};
/**
 * @private
 *
 * A Form which renders a collection of snippets.
 *
 * @param props Standard context menu form props + an array of snippets to render.
 */
var Form = function (props) {
    var snippets = props.snippets, components = props.components, rest = __rest(props, ["snippets", "components"]);
    var Wrapper = components.Wrapper;
    var submitValues = function (values) {
        snippets.forEach(function (s) {
            if (!s.submitValues)
                return;
            if (s.initialValues && s.submitValues) {
                // Ensure that we only submit values whose keys were present in the initial values.
                var values$ = lodash_1.pick(values, Object.keys(s.initialValues));
                s.submitValues(values$);
            }
            else {
                throw new Error('Submit handler requires \'submitValues\' and \'initialValues\' to be invoked properly.');
            }
        });
    };
    var initialValues = snippets.reduce(function (values, snippet) { return (__assign(__assign({}, values), snippet.initialValues)); }, {});
    var formProps = { submitValues: submitValues, initialValues: initialValues };
    var Snippets = function (props$) {
        var snippets$ = props$.snippets, rest$ = __rest(props$, ["snippets"]);
        var renderProps = __assign({ formState: informed_1.useFormState(), formApi: informed_1.useFormApi() }, rest$);
        return react_1.default.createElement(react_1.default.Fragment, null, snippets$.map(function (s) { return s.render(renderProps); }));
    };
    return (react_1.default.createElement(contextMenuForm_1.ContextMenuForm, __assign({}, rest, formProps),
        react_1.default.createElement(Wrapper, null,
            react_1.default.createElement(Snippets, __assign({ snippets: snippets }, rest)))));
};
/**
 * @private
 *
 * Given the supplied options, returns a menu options hook suitable to pass to withMenuOptions.
 *
 * @param def The options defining this compound form.
 *
 * @returns A menu options hook.
 */
var createMenuOptions = function (def) {
    var useMenuOptions = function (_a) {
        var components = _a.components, rest = __rest(_a, ["components"]);
        var _b = def.useMenuOptions, useMenuOptionsBase = _b === void 0 ? function () { return undefined; } : _b;
        var baseOptions = useMenuOptionsBase(rest) || [];
        var compoundFormOption = baseOptions[0], otherOptions = baseOptions.slice(1);
        var snippets = react_1.useContext(SnippetContext);
        var render = function (p) { return (react_1.default.createElement(Form, __assign({}, p, { components: components, snippets: snippets.current }))); };
        return __spreadArrays([
            __assign(__assign({}, compoundFormOption), { handler: function () { return render; } })
        ], otherOptions);
    };
    return __assign(__assign({}, def), { useMenuOptions: useMenuOptions });
};
/**
 * HOC to create a menu option which will display a "compound form". Children of this
 * component can contribute "snippets" to the form. Each snippet consists of
 * - a render function (to render the form fields)
 * - initial values to populate the fields
 * - a submit handler which will be passed all submitted values from the form.
 * @param option A context menu option (minus the handler).
 */
var withCompoundForm = function (options) { return function (Component) {
    var finalOptions = createMenuOptions(options);
    var ComponentWithButton = PageContextProvider_1.withMenuOptions(finalOptions)(Component);
    var WithCompoundForm = function (props) {
        // This ref will hold all snippets registered by child components.
        var snippets = react_1.useRef([]);
        // This callback will be used by child components to contribute their snippets.
        var registerSnippet = function (snippet) {
            // Ensure that there is only a single entry for each snippet.
            var existsAt = snippets.current.findIndex(function (s) { return s.id === snippet.id; });
            if (existsAt >= 0)
                snippets.current.splice(existsAt, 1, snippet);
            else
                snippets.current.push(snippet);
        };
        // Wrap the original component with a context containing the register snippet callback
        return (react_1.default.createElement(Context.Provider, { value: registerSnippet },
            react_1.default.createElement(SnippetContext.Provider, { value: snippets },
                react_1.default.createElement(ComponentWithButton, __assign({}, props)))));
    };
    return fclasses_1.designable(defaultComponents, 'CompoundForm')(WithCompoundForm);
}; };
exports.default = withCompoundForm;
/**
 * Hook to register a form snippet which will be rendered as part of a compound form. Should
 * be invoked within a component wrapped in `withCompoundForm`.
 *
 * @param snippet The snippet to add to the form.
 */
exports.useRegisterSnippet = function (snippet) { return (react_1.useContext(Context)(snippet)); };
//# sourceMappingURL=withCompoundForm.js.map