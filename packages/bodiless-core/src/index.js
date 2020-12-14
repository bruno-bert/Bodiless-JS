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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnNodeErrorNotification = exports.withSwitcherButton = exports.withNotificationButton = exports.NotificationProvider = exports.useExtendHandler = exports.withExtendHandler = exports.useLocalStorage = exports.useNotify = exports.useNotifications = exports.useEditToggle = exports.withFlowToggle = exports.ifToggledOn = exports.ifToggledOff = exports.withResetButton = exports.withDefaultContent = exports.withChild = exports.useActivateOnEffectActivator = exports.useActivateOnEffect = exports.withActivateOnEffect = exports.ActivateOnEffectProvider = exports.withOnlyProps = exports.withoutProps = exports.ifReadOnly = exports.ifEditable = exports.DefaultContentNode = exports.useNodeDataHandlers = exports.useNode = exports.NodeProvider = exports.withData = exports.useMenuOptionUI = exports.ContextSubMenu = exports.ContextMenuForm = exports.useContextMenuForm = exports.contextMenuForm = exports.endSidecarNodes = exports.startSidecarNodes = exports.useRegisterSnippet = exports.withEditFormSnippet = exports.withCompoundForm = exports.withSidecarNodes = exports.withNodeKey = exports.withNode = exports.useEditFormProps = exports.createMenuOptionGroup = exports.withEditButton = exports.useUUID = exports.useContextActivator = exports.useEditContext = exports.PageEditContext = exports.useGetter = exports.useRegisterMenuOptions = exports.withMenuOptions = exports.PageContextProvider = exports.withLocalContextMenu = exports.withNodeDataHandlers = exports.withNodeAndHandlers = exports.withActivatorWrapper = exports.withContextActivator = exports.asReadOnly = exports.asStatic = exports.withBodilessData = exports.asBodilessComponent = void 0;
var PageContextProvider_1 = __importStar(require("./PageContextProvider"));
exports.PageContextProvider = PageContextProvider_1.default;
Object.defineProperty(exports, "withMenuOptions", { enumerable: true, get: function () { return PageContextProvider_1.withMenuOptions; } });
Object.defineProperty(exports, "useRegisterMenuOptions", { enumerable: true, get: function () { return PageContextProvider_1.useRegisterMenuOptions; } });
var PageEditContext_1 = __importDefault(require("./PageEditContext"));
exports.PageEditContext = PageEditContext_1.default;
var asStatic_1 = __importDefault(require("./asStatic"));
exports.asStatic = asStatic_1.default;
var asReadOnly_1 = __importDefault(require("./asReadOnly"));
exports.asReadOnly = asReadOnly_1.default;
var hooks_1 = require("./hooks");
Object.defineProperty(exports, "useEditContext", { enumerable: true, get: function () { return hooks_1.useEditContext; } });
Object.defineProperty(exports, "useUUID", { enumerable: true, get: function () { return hooks_1.useUUID; } });
Object.defineProperty(exports, "useContextActivator", { enumerable: true, get: function () { return hooks_1.useContextActivator; } });
Object.defineProperty(exports, "useExtendHandler", { enumerable: true, get: function () { return hooks_1.useExtendHandler; } });
Object.defineProperty(exports, "useGetter", { enumerable: true, get: function () { return hooks_1.useGetter; } });
Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return hooks_1.useLocalStorage; } });
var withNode_1 = __importStar(require("./withNode"));
exports.withNode = withNode_1.default;
Object.defineProperty(exports, "withNodeKey", { enumerable: true, get: function () { return withNode_1.withNodeKey; } });
var withSidecarNodes_1 = __importStar(require("./withSidecarNodes"));
exports.withSidecarNodes = withSidecarNodes_1.default;
Object.defineProperty(exports, "startSidecarNodes", { enumerable: true, get: function () { return withSidecarNodes_1.startSidecarNodes; } });
Object.defineProperty(exports, "endSidecarNodes", { enumerable: true, get: function () { return withSidecarNodes_1.endSidecarNodes; } });
var Contentful_1 = require("./Contentful");
Object.defineProperty(exports, "withDefaultContent", { enumerable: true, get: function () { return Contentful_1.withDefaultContent; } });
Object.defineProperty(exports, "withResetButton", { enumerable: true, get: function () { return Contentful_1.withResetButton; } });
var withEditButton_1 = __importStar(require("./withEditButton"));
exports.withEditButton = withEditButton_1.default;
Object.defineProperty(exports, "useEditFormProps", { enumerable: true, get: function () { return withEditButton_1.useEditFormProps; } });
Object.defineProperty(exports, "createMenuOptionGroup", { enumerable: true, get: function () { return withEditButton_1.createMenuOptionGroup; } });
var contextMenuForm_1 = __importStar(require("./contextMenuForm"));
exports.useContextMenuForm = contextMenuForm_1.default;
Object.defineProperty(exports, "contextMenuForm", { enumerable: true, get: function () { return contextMenuForm_1.contextMenuForm; } });
Object.defineProperty(exports, "ContextMenuForm", { enumerable: true, get: function () { return contextMenuForm_1.ContextMenuForm; } });
var withCompoundForm_1 = __importStar(require("./withCompoundForm"));
exports.withCompoundForm = withCompoundForm_1.default;
Object.defineProperty(exports, "useRegisterSnippet", { enumerable: true, get: function () { return withCompoundForm_1.useRegisterSnippet; } });
var withEditFormSnippet_1 = __importDefault(require("./withEditFormSnippet"));
exports.withEditFormSnippet = withEditFormSnippet_1.default;
var withData_1 = __importDefault(require("./withData"));
exports.withData = withData_1.default;
var NodeProvider_1 = __importStar(require("./NodeProvider"));
exports.NodeProvider = NodeProvider_1.default;
Object.defineProperty(exports, "useNode", { enumerable: true, get: function () { return NodeProvider_1.useNode; } });
Object.defineProperty(exports, "useNodeDataHandlers", { enumerable: true, get: function () { return NodeProvider_1.useNodeDataHandlers; } });
var ContentNode_1 = require("./ContentNode");
Object.defineProperty(exports, "DefaultContentNode", { enumerable: true, get: function () { return ContentNode_1.DefaultContentNode; } });
var hoc_1 = require("./hoc");
Object.defineProperty(exports, "withNodeAndHandlers", { enumerable: true, get: function () { return hoc_1.withNodeAndHandlers; } });
Object.defineProperty(exports, "withNodeDataHandlers", { enumerable: true, get: function () { return hoc_1.withNodeDataHandlers; } });
Object.defineProperty(exports, "withLocalContextMenu", { enumerable: true, get: function () { return hoc_1.withLocalContextMenu; } });
Object.defineProperty(exports, "withContextActivator", { enumerable: true, get: function () { return hoc_1.withContextActivator; } });
Object.defineProperty(exports, "withoutProps", { enumerable: true, get: function () { return hoc_1.withoutProps; } });
Object.defineProperty(exports, "withExtendHandler", { enumerable: true, get: function () { return hoc_1.withExtendHandler; } });
Object.defineProperty(exports, "withOnlyProps", { enumerable: true, get: function () { return hoc_1.withOnlyProps; } });
var withFlowToggle_1 = require("./withFlowToggle");
Object.defineProperty(exports, "ifToggledOff", { enumerable: true, get: function () { return withFlowToggle_1.ifToggledOff; } });
Object.defineProperty(exports, "ifToggledOn", { enumerable: true, get: function () { return withFlowToggle_1.ifToggledOn; } });
Object.defineProperty(exports, "withFlowToggle", { enumerable: true, get: function () { return withFlowToggle_1.withFlowToggle; } });
var withEditToggle_1 = require("./withEditToggle");
Object.defineProperty(exports, "ifEditable", { enumerable: true, get: function () { return withEditToggle_1.ifEditable; } });
Object.defineProperty(exports, "ifReadOnly", { enumerable: true, get: function () { return withEditToggle_1.ifReadOnly; } });
Object.defineProperty(exports, "useEditToggle", { enumerable: true, get: function () { return withEditToggle_1.useEditToggle; } });
var ActivateContext_1 = require("./ActivateContext");
Object.defineProperty(exports, "ActivateOnEffectProvider", { enumerable: true, get: function () { return ActivateContext_1.ActivateOnEffectProvider; } });
Object.defineProperty(exports, "withActivateOnEffect", { enumerable: true, get: function () { return ActivateContext_1.withActivateOnEffect; } });
Object.defineProperty(exports, "useActivateOnEffect", { enumerable: true, get: function () { return ActivateContext_1.useActivateOnEffect; } });
Object.defineProperty(exports, "useActivateOnEffectActivator", { enumerable: true, get: function () { return ActivateContext_1.useActivateOnEffectActivator; } });
var NotificationProvider_1 = require("./NotificationProvider");
Object.defineProperty(exports, "NotificationProvider", { enumerable: true, get: function () { return NotificationProvider_1.NotificationProvider; } });
Object.defineProperty(exports, "useNotifications", { enumerable: true, get: function () { return NotificationProvider_1.useNotifications; } });
Object.defineProperty(exports, "useNotify", { enumerable: true, get: function () { return NotificationProvider_1.useNotify; } });
var withNotificationButton_1 = __importDefault(require("./withNotificationButton"));
exports.withNotificationButton = withNotificationButton_1.default;
var withChild_1 = __importDefault(require("./withChild"));
exports.withChild = withChild_1.default;
var asBodilessComponent_1 = __importStar(require("./asBodilessComponent"));
exports.asBodilessComponent = asBodilessComponent_1.default;
Object.defineProperty(exports, "withActivatorWrapper", { enumerable: true, get: function () { return asBodilessComponent_1.withActivatorWrapper; } });
Object.defineProperty(exports, "withBodilessData", { enumerable: true, get: function () { return asBodilessComponent_1.withBodilessData; } });
var ContextMenuContext_1 = require("./components/ContextMenuContext");
Object.defineProperty(exports, "useMenuOptionUI", { enumerable: true, get: function () { return ContextMenuContext_1.useMenuOptionUI; } });
var ContextSubMenu_1 = __importDefault(require("./ContextMenu/ContextSubMenu"));
exports.ContextSubMenu = ContextSubMenu_1.default;
var withSwitcherButton_1 = __importDefault(require("./withSwitcherButton"));
exports.withSwitcherButton = withSwitcherButton_1.default;
var OnNodeErrorNotification_1 = __importDefault(require("./OnNodeErrorNotification"));
exports.OnNodeErrorNotification = OnNodeErrorNotification_1.default;
__exportStar(require("./components"), exports);
//# sourceMappingURL=index.js.map