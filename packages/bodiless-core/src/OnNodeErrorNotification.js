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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var NotificationProvider_1 = require("./NotificationProvider");
var NodeProvider_1 = require("./NodeProvider");
var NODE_ERROR_NOTIFICATION_ID = 'STORE_ERROR_NOTIFICATION_ID';
var OnNodeErrorNotification = mobx_react_lite_1.observer(function () {
    var node = NodeProvider_1.useNode().node;
    var hasError = node.hasError;
    var notifications = hasError() ? [{
            id: NODE_ERROR_NOTIFICATION_ID,
            message: 'There is an error with saving data',
        }] : [];
    NotificationProvider_1.useNotify(notifications);
    return react_1.default.createElement(react_1.default.Fragment, null);
});
exports.default = OnNodeErrorNotification;
//# sourceMappingURL=OnNodeErrorNotification.js.map