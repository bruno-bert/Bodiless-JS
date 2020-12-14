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
var react_1 = __importStar(require("react"));
var core_1 = require("@bodiless/core");
var fclasses_1 = require("@bodiless/fclasses");
var mobx_react_lite_1 = require("mobx-react-lite");
var core_ui_1 = require("@bodiless/core-ui");
var GatsbyNodeProvider_1 = __importDefault(require("./GatsbyNodeProvider"));
var GatsbyPageProvider_1 = __importDefault(require("./GatsbyPageProvider"));
var withNewPageButton_1 = __importDefault(require("./withNewPageButton"));
var useGitButtons_1 = __importDefault(require("./useGitButtons"));
var defaultUI = {
    ContextWrapper: core_ui_1.ContextWrapper,
    PageEditor: core_ui_1.PageEditor,
};
var getUI = function (ui) {
    if (ui === void 0) { ui = {}; }
    return (__assign(__assign({}, defaultUI), ui));
};
var NotificationButton = core_1.withNotificationButton(react_1.Fragment);
var SwitcherButton = core_1.withSwitcherButton(react_1.Fragment);
var NewPageButton = withNewPageButton_1.default(react_1.Fragment);
var GitButtons = function () {
    useGitButtons_1.default();
    return react_1.default.createElement(react_1.default.Fragment, null);
};
var ShowDesignKeys = (process.env.NODE_ENV === 'development' || process.env.BODILESS_DEBUG === '1') ? fclasses_1.withShowDesignKeys()(react_1.Fragment) : react_1.Fragment;
var Page = mobx_react_lite_1.observer(function (_a) {
    var children = _a.children, ui = _a.ui, rest = __rest(_a, ["children", "ui"]);
    var _b = getUI(ui), Editor = _b.PageEditor, Wrapper = _b.ContextWrapper;
    if (process.env.NODE_ENV === 'development') {
        return (react_1.default.createElement(GatsbyNodeProvider_1.default, __assign({}, rest),
            react_1.default.createElement(ShowDesignKeys, null,
                react_1.default.createElement(GatsbyPageProvider_1.default, { pageContext: rest.pageContext },
                    react_1.default.createElement(core_1.NotificationProvider, null,
                        react_1.default.createElement(SwitcherButton, null),
                        react_1.default.createElement(NotificationButton, null),
                        react_1.default.createElement(Editor, null,
                            react_1.default.createElement(core_1.OnNodeErrorNotification, null),
                            react_1.default.createElement(NewPageButton, null),
                            react_1.default.createElement(GitButtons, null),
                            react_1.default.createElement(Wrapper, { clickable: true }, children)))))));
    }
    return (react_1.default.createElement(GatsbyNodeProvider_1.default, __assign({}, rest),
        react_1.default.createElement(ShowDesignKeys, null,
            react_1.default.createElement(core_1.StaticPage, null, children))));
});
exports.default = Page;
//# sourceMappingURL=Page.js.map