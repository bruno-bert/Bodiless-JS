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
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var hoc_1 = require("../hoc");
var PageContextProvider_1 = require("../PageContextProvider");
var NodeProvider_1 = require("../NodeProvider");
var useMenuOptions = function (menuOptionWithNodeKey) { return function () {
    var node = NodeProvider_1.useNode().node;
    var _a = menuOptionWithNodeKey || { nodeKey: undefined }, nodeKey = _a.nodeKey, menuOption = __rest(_a, ["nodeKey"]);
    var nodeKeys = Array.isArray(nodeKey) ? nodeKey : [nodeKey];
    var nodeKeysToDelete = nodeKeys.map(function (key) { return (key ? node.path.concat(key) : undefined); });
    // TODO: we should disable or remove the button when the node is already reverted
    var menuOptions = [
        __assign({ icon: 'undo', name: 'reset-default-content', label: 'Reset', handler: function () { return nodeKeysToDelete.forEach(function (key) { return node.delete(key); }); }, local: true, global: false, group: 'reset-default-content-group' }, menuOption),
        {
            name: 'reset-default-content-group',
            label: 'Content',
            local: true,
            global: false,
            Component: 'group',
            groupMerge: 'merge',
        },
    ];
    return menuOptions;
}; };
var withResetButton = function (menuOptionWithNodeKey) { return lodash_1.flowRight(PageContextProvider_1.withMenuOptions({
    useMenuOptions: useMenuOptions(menuOptionWithNodeKey),
    name: 'Default Content',
}), hoc_1.withContextActivator('onClick'), hoc_1.withLocalContextMenu); };
exports.default = withResetButton;
//# sourceMappingURL=withResetButton.js.map