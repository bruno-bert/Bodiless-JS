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
exports.stylable = exports.removeClassesIf = exports.removeClasses = exports.addClassesIf = exports.addClasses = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
var alwaysTrueCondition = function () { return true; };
var modifyClassesIf = function (operation) { return function (condition) { return function (classes) {
    var hoc = function (Component) {
        var ModifyClasses = function (props) {
            var fClasses = props.fClasses, rest = __rest(props, ["fClasses"]);
            var newFClasses = condition(props) ? {
                parentFClasses: fClasses,
                operation: operation,
                classes: classes,
            } : fClasses;
            return (react_1.default.createElement(Component, __assign({ fClasses: newFClasses }, rest)));
        };
        ModifyClasses.displayName = lodash_1.capitalize(operation) + "Classes";
        return ModifyClasses;
    };
    hoc.flow = hoc;
    return hoc;
}; }; };
/**
 * Allows to add classes to a component conditionally.
 *
 * @param condition A function that is evaluated to determine whether classes should be added.
 * @returns HOC that can be used for adding classes to a component
 */
var addClassesIf = modifyClassesIf('add');
exports.addClassesIf = addClassesIf;
/**
 * HOC which specifies that a list of classes should be added to the wrapped component's className.
 *
 * @param classes A string or array of classes to add.
 */
var addClasses = addClassesIf(alwaysTrueCondition);
exports.addClasses = addClasses;
/**
 * Allows to remove classes from a component conditionally.
 *
 * @param condition A function that is evaluated to determine whether classes should be removed.
 * @returns HOC that can be used for removing classes from a component
 */
var removeClassesIf = modifyClassesIf('remove');
exports.removeClassesIf = removeClassesIf;
/**
 * HOC which specifies that a list of classes shoudl be removed from the wrapped component's
 * className.
 *
 * @param classes A string or array of classes to remove. If not specified, then *all* classes will
 * be removed.
 */
var removeClasses = removeClassesIf(alwaysTrueCondition);
exports.removeClasses = removeClasses;
var asArray = function (classes) {
    if (classes === void 0) { classes = []; }
    return (Array.isArray(classes) ? classes : classes.split(' '));
};
var asClassName = function (classes) {
    var asString = (Array.isArray(classes) ? classes.join(' ') : classes);
    return asString || undefined;
};
var asFClasses = function (classes) { return ({
    operation: 'add',
    classes: classes,
}); };
var apply = function (_a, className) {
    var _b = _a === void 0 ? {} : _a, operation = _b.operation, classes = _b.classes, parentFClasses = _b.parentFClasses;
    if (className === void 0) { className = []; }
    var newClasses;
    switch (operation) {
        case 'add':
            newClasses = lodash_1.union(asArray(classes), asArray(className));
            break;
        case 'remove':
            newClasses = classes ? lodash_1.difference(asArray(className), asArray(classes)) : [];
            break;
        default: newClasses = className;
    }
    return parentFClasses ? apply(parentFClasses, newClasses) : newClasses;
};
/**
 * Makes any component or intrinsic element stylable using FClasses. When the component is
 * wrapped by `addClasses()` or `removeClasses()`, the specified operations will be applied
 * in reverse order up the component tree, so that the outermost operations take precedence.
 *
 * @param Component The component to be made stylable.
 */
var stylable = function (Component) {
    var Stylable = function (props) {
        var fClasses = props.fClasses, className = props.className, rest = __rest(props, ["fClasses", "className"]);
        var classes = apply(fClasses);
        var newClassName = asClassName(className ? apply(asFClasses(className), classes) : classes);
        return react_1.default.createElement(Component, __assign({}, rest, { className: newClassName }));
    };
    Stylable.displayName = 'Stylable';
    return Stylable;
};
exports.stylable = stylable;
//# sourceMappingURL=FClasses.js.map