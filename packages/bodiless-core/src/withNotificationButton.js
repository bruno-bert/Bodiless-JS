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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var contextMenuForm_1 = require("./contextMenuForm");
var PageContextProvider_1 = require("./PageContextProvider");
var NotificationProvider_1 = require("./NotificationProvider");
var ContextMenuContext_1 = require("./components/ContextMenuContext");
var NotificationList = function () {
    var _a = ContextMenuContext_1.useMenuOptionUI(), ComponentFormList = _a.ComponentFormList, ComponentFormListItem = _a.ComponentFormListItem;
    var notifications = NotificationProvider_1.useNotifications().notifications;
    if (notifications.length === 0)
        return (react_1.default.createElement("p", null, "There are no alerts."));
    return (react_1.default.createElement(ComponentFormList, null, notifications.map(function (n) { return (react_1.default.createElement(ComponentFormListItem, { key: n.id }, n.message)); })));
};
var RenderForm = function (props) {
    var ComponentFormTitle = ContextMenuContext_1.useMenuOptionUI().ComponentFormTitle;
    return (react_1.default.createElement(contextMenuForm_1.ContextMenuForm, __assign({}, props, { hasSubmit: false }),
        react_1.default.createElement(ComponentFormTitle, null, "Alerts"),
        react_1.default.createElement(NotificationList, null)));
};
// Work around "change in the order of Hooks" issue.
var renderForm = function (props) { return react_1.default.createElement(RenderForm, __assign({}, props)); };
/**
 * @private
 *
 * Hook to return the notification button.
 */
var useMenuOptions = function () {
    var notifications = NotificationProvider_1.useNotifications().notifications;
    var menuOptions = [{
            name: 'Notifications',
            label: 'Alerts',
            icon: notifications.length > 0 ? 'notification_important' : 'notifications',
            isActive: notifications.length > 0,
            handler: function () { return renderForm; },
        }];
    return menuOptions;
};
/**
 * HOC to add a notification button to the current context.
 */
var withNotificationButton = PageContextProvider_1.withMenuOptions({
    name: 'Notifications',
    useMenuOptions: useMenuOptions,
    peer: true,
});
exports.default = withNotificationButton;
//# sourceMappingURL=withNotificationButton.js.map