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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotifications = exports.useNotify = exports.NotificationProvider = void 0;
var react_1 = __importStar(require("react"));
var uuid_1 = require("uuid");
var NotificationContext = react_1.default.createContext({
    notifications: [],
});
var useNotifications = function () { return react_1.useContext(NotificationContext); };
exports.useNotifications = useNotifications;
var NotifyContext = react_1.default.createContext({
    notify: function () { return undefined; },
});
/**
 * A component used to provide notifications.
 *
 * @param children
 * @constructor
 */
var NotificationProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState([]), notifications = _b[0], setNotifications = _b[1];
    var notify = function (owner, newNotifications) { return setNotifications(function (oldNotifications) { return oldNotifications
        .filter(function (n) { return n.owner !== owner; })
        .concat(newNotifications.map(function (n) { return (__assign(__assign({}, n), { owner: owner })); })); }); };
    // We memoize the notifier context value to prevent unnecessary re-renders
    // of subscribers to only this context.
    var notifyContextValue = react_1.useMemo(function () { return ({ notify: notify }); }, [setNotifications]);
    return (react_1.default.createElement(NotificationContext.Provider, { value: { notifications: notifications } },
        react_1.default.createElement(NotifyContext.Provider, { value: notifyContextValue }, children)));
};
exports.NotificationProvider = NotificationProvider;
/**
 * The useNotify() hook allows you to register notifications which should be
 * displayed to the user upon clicking the "Notifications" button on the main
 * menu.
 *
 * Note that you are responsible for maintaining and persisting the notifications
 * you want to display. Every time your component re-renders, all the notifications
 * it owns will be regenerated from the list provided to this hook.
 *
 * @param notifications An array of Notification objects which should be displayed.
 */
var useNotify = function (notifications) {
    var owner = react_1.useRef(uuid_1.v1()).current;
    var notify = react_1.useContext(NotifyContext).notify;
    react_1.useEffect(function () {
        notify(owner, notifications || []);
        return function () { return notify(owner, []); };
    }, [notify, owner, notifications]);
};
exports.useNotify = useNotify;
//# sourceMappingURL=NotificationProvider.js.map