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
var react_1 = __importDefault(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var rc_tooltip_1 = __importDefault(require("rc-tooltip"));
var lodash_1 = require("lodash");
var hooks_1 = require("../hooks");
var PageEditor_1 = require("./PageEditor");
/**
 * @private
 *
 * Purpose of this event handler to control a case when the tooltip shows on a component
 * that became invisible for any reason and the tooltip positioned to the top-left corner
 * of the screen.
 *
 * @param domNode The element to which the popup is attached.
 */
var onPopupAlign = function (domNode) {
    var element = domNode;
    if (element.getBoundingClientRect().left <= 0) {
        element.style.visibility = 'hidden';
    }
    else {
        element.style.visibility = 'visible';
    }
};
// Filters out non-local options and records named groups.
var buildMap = function (options$) {
    var options = new Map();
    var groups = new Set();
    options$.forEach(function (op) {
        if (!op.local)
            return;
        options.set(op.name, op);
        if (op.group)
            groups.add(op.group);
    });
    return { options: options, groups: groups };
};
var addDefaultGroups = function (map) {
    var local = true;
    var Component = 'group';
    var groups = new Set();
    var options = new Map();
    map.options.forEach(function (op) {
        var op$ = op;
        // Add a default group for an option only if
        // - The option is not itself a named group, and
        // - The option does not belong to a named group, and
        // - The option has a context to provide a group name and label
        if (!map.groups.has(op.name) && !op.group && op.context) {
            var context = op.context;
            var name_1 = context.id, label = context.name;
            // Add the group property to the option.
            op$ = __assign(__assign({}, op), { group: name_1 });
            // Create the group option if it does not exist.
            if (!groups.has(name_1)) {
                groups.add(name_1);
                options.set(name_1, {
                    name: name_1, label: label, context: context, local: local, Component: Component,
                });
            }
        }
        options.set(op$.name, op$);
        if (map.groups.has(op$.name))
            groups.add(op$.name);
    });
    return { options: options, groups: groups };
};
// If a group has a merge property, then merge it with the next group if one exists.
var mergeGroups = function (map) {
    var groups = new Set(map.groups);
    var options = new Map(map.options.entries());
    var groupArray = Array.from(map.groups.values());
    groupArray.forEach(function (group, index) {
        if (options.get(group).groupMerge === 'merge') {
            var next_1 = groupArray[index + 1];
            if (next_1) {
                var members = Array.from(options.values()).filter(function (op) { return op.group === group; });
                members.forEach(function (op) {
                    options.set(op.name, __assign(__assign({}, op), { group: next_1 }));
                });
                groups.delete(group);
                options.delete(group);
            }
        }
        else if (options.get(group).groupMerge === 'merge-up' && index > 0) {
            var next_2 = groupArray[index - 1];
            var members = Array.from(options.values()).filter(function (op) { return op.group === group; });
            members.forEach(function (op) {
                options.set(op.name, __assign(__assign({}, op), { group: next_2 }));
            });
            groups.delete(group);
            options.delete(group);
        }
    });
    return { options: options, groups: groups };
};
// Ensure that options for innermost contexts appear first.
var reverseContextOrder = function (map) {
    // Get list of contexts in reverse order.
    var contexts = new Set();
    var groupArray = Array.from(map.groups.values());
    __spreadArrays(groupArray).reverse().forEach(function (g) {
        var _a;
        var context = (_a = map.options.get(g)) === null || _a === void 0 ? void 0 : _a.context;
        if (context)
            contexts.add(context);
    });
    // Create the correclty ordered list of groups.
    var groups = new Set();
    contexts.forEach(function (c) {
        var cgroups = groupArray.filter(function (g) { return map.options.get(g).context === c; });
        cgroups.forEach(function (g) { return groups.add(g); });
    });
    // Add any groups without context at the end
    groupArray.filter(function (g) { return !map.options.get(g).context; }).forEach(function (g) { return groups.add(g); });
    // Delete each group option and re-add it in the correct order.
    var options = new Map(map.options);
    groups.forEach(function (g) {
        var option = options.get(g); // We know there is an option for every group by now.
        options.delete(g);
        options.set(g, option);
    });
    return { options: options, groups: groups };
};
// Sets the isHidden property of all groups so as to hide groups which have no visible members.
var addHideEmptyGroups = function (map) {
    var flowIsHidden = function (isHidden) { return function (result) { return ((typeof isHidden === 'function' ? isHidden() : Boolean(isHidden)) && result); }; };
    var options = new Map(map.options);
    map.groups.forEach(function (groupName) {
        var group = options.get(groupName);
        var members = Array.from(options.values()).filter(function (o) { return o.group === groupName; });
        var tests = members.reduce(function (acc, next) { return __spreadArrays(acc, [flowIsHidden(next.isHidden)]); }, []);
        // Groups are hidden by default
        var isHidden = function () {
            var groupIsHidden = typeof group.isHidden === 'function'
                ? group.isHidden() : group.isHidden;
            // A group which is explicitly hidden should never be shown.
            if (groupIsHidden)
                return true;
            // Otherwise, group visibility is determined by visibility of its members.
            return lodash_1.flow.apply(void 0, tests)(true);
        };
        options.set(groupName, __assign(__assign({}, group), { isHidden: isHidden }));
    });
    return { groups: map.groups, options: options };
};
var addAriaLabels = function (map) {
    map.options.forEach(function (op, name) {
        var _a;
        if (!map.groups.has(name) && !op.ariaLabel) {
            var groupLabel_1 = op.group && ((_a = map.options.get(op.group)) === null || _a === void 0 ? void 0 : _a.label);
            var label_1 = op.label;
            if (groupLabel_1 && label_1) {
                var ariaLabel = function () {
                    var groupLabel$ = typeof groupLabel_1 === 'function' ? groupLabel_1() : groupLabel_1;
                    var label$ = typeof label_1 === 'function' ? label_1() : label_1;
                    return label$ + " " + groupLabel$;
                };
                map.options.set(name, __assign(__assign({}, op), { ariaLabel: ariaLabel }));
            }
        }
    });
    return map;
};
var useLocalOptions = function () {
    var contextMenuOptions = hooks_1.useEditContext().contextMenuOptions;
    var options = lodash_1.flow(buildMap, addDefaultGroups, mergeGroups, reverseContextOrder, addHideEmptyGroups, addAriaLabels)(contextMenuOptions).options;
    return Array.from(options.values());
};
/**
 * @private
 *
 * Renders children inside an rc-tooltip whose overlay contents contain all local menu option icons.
 */
var ContextMenuOverlay = mobx_react_lite_1.observer(function () {
    var Menu = PageEditor_1.useUI().LocalContextMenu;
    var options = useLocalOptions();
    return react_1.default.createElement(Menu, { options: options });
});
/*
 * Wraps its children in a tooltip displaying local context menu options, but only if the
 * current context is the innermost context to which a local context menu has been assigned.
 */
var LocalContextMenu = function (_a) {
    var children = _a.children;
    var context = hooks_1.useEditContext();
    // console.log('render tooltip for', context.name);
    // let the context know it has a localMenu
    context.hasLocalMenu = true;
    var isInnermostLocalMenu = context.isInnermostLocalMenu, areLocalTooltipsDisabled = context.areLocalTooltipsDisabled;
    // TODO: Only render tooltip when needed. Currently this causes focus issues with editables.
    // (The editable gets the focus, then the tooltip re-renders and creates a new editable
    // which is not focused.  Might be worth investigating this at some point.)
    // if (!isInnermostLocalMenu) {
    //   return <>{children}</>;
    // }
    return (react_1.default.createElement(rc_tooltip_1.default, { visible: isInnermostLocalMenu && !areLocalTooltipsDisabled, overlay: react_1.default.createElement(ContextMenuOverlay, null), trigger: [], destroyTooltipOnHide: true, placement: "bottomLeft", onPopupAlign: onPopupAlign }, children));
};
exports.default = mobx_react_lite_1.observer(LocalContextMenu);
//# sourceMappingURL=LocalContextMenu.js.map