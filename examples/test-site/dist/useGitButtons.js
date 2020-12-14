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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-alert */
var react_1 = __importStar(require("react"));
var core_1 = require("@bodiless/core");
var BackendClient_1 = __importDefault(require("./BackendClient"));
var CommitsList_1 = __importDefault(require("./CommitsList"));
var RemoteChanges_1 = __importDefault(require("./RemoteChanges"));
var Reset_1 = __importDefault(require("./Reset"));
var SaveChanges_1 = __importDefault(require("./SaveChanges"));
/**
 * DefinePlugin env var.
 *
 * All env vars are stringified by the Webpack DefinePlugin.
 * https://webpack.js.org/plugins/define-plugin/#usageGatsby.
 *
 * DefinePlugin is used by Gatsby to source env vars.
 * https://www.gatsbyjs.org/docs/environment-variables/#example.
 */
var canCommit = (process.env.BODILESS_BACKEND_COMMIT_ENABLED || '0') === '1';
var canAlertOnLoad = process.env.BODILESS_ALERT_ON_PAGE_LOAD_ENABLED || 1;
var formGetCommitsList = function (client) { return core_1.contextMenuForm({
    // @todo: handle what happens when user selects a commit from the loaded list.
    submitValues: function () { },
    hasSubmit: false,
})(function (_a) {
    var ui = _a.ui;
    var ComponentFormTitle = core_1.getUI(ui).ComponentFormTitle;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ComponentFormTitle, null, "Latest Commits"),
        react_1.default.createElement(CommitsList_1.default, { client: client, ui: ui })));
}); };
var formGitCommit = function (client) { return core_1.contextMenuForm({
    submitValues: function (_a) {
        var keepOpen = _a.keepOpen;
        return keepOpen;
    },
    hasSubmit: function (_a) {
        var keepOpen = _a.keepOpen;
        return keepOpen;
    },
})(function (_a) {
    var ui = _a.ui, formApi = _a.formApi, formState = _a.formState;
    var ComponentFormText = core_1.getUI(ui).ComponentFormText;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ComponentFormText, { type: "hidden", field: "keepOpen", initialValue: true }),
        react_1.default.createElement(SaveChanges_1.default, { ui: ui, formState: formState, formApi: formApi, client: client })));
}); };
var formGitPull = function (client, notifyOfChanges) { return core_1.contextMenuForm({
    submitValues: function (values) {
        var keepOpen = values.keepOpen;
        return keepOpen;
    },
    onClose: function (_a) {
        var refreshWhenDone = _a.refreshWhenDone;
        if (refreshWhenDone) {
            window.location.reload();
        }
    },
    hasSubmit: function (_a) {
        var keepOpen = _a.keepOpen;
        return keepOpen;
    },
})(function (_a) {
    var ui = _a.ui;
    var _b = core_1.getUI(ui), ComponentFormTitle = _b.ComponentFormTitle, ComponentFormText = _b.ComponentFormText;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ComponentFormTitle, null, "Pull Changes"),
        react_1.default.createElement(ComponentFormText, { type: "hidden", field: "keepOpen", initialValue: false }),
        react_1.default.createElement(ComponentFormText, { type: "hidden", field: "mergeMaster", initialValue: false }),
        react_1.default.createElement(ComponentFormText, { type: "hidden", field: "refreshWhenDone", initialValue: false }),
        react_1.default.createElement(RemoteChanges_1.default, { client: client, notifyOfChanges: notifyOfChanges })));
}); };
var formGitReset = function (client) { return core_1.contextMenuForm({
    submitValues: function (submittedValues) {
        var keepOpen = submittedValues.keepOpen;
        if (keepOpen === false)
            window.location.reload();
        return keepOpen;
    },
    onClose: function (_a) {
        var reload = _a.reload;
        if (reload === true) {
            window.location.reload();
        }
    },
    hasSubmit: function (_a) {
        var keepOpen = _a.keepOpen;
        return keepOpen;
    },
})(function (_a) {
    var ui = _a.ui, formState = _a.formState, formApi = _a.formApi;
    var ComponentFormText = core_1.getUI(ui).ComponentFormText;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ComponentFormText, { type: "hidden", field: "keepOpen", initialValue: true }),
        react_1.default.createElement(ComponentFormText, { type: "hidden", field: "reload", initialValue: false }),
        react_1.default.createElement(Reset_1.default, { ui: ui, formState: formState, formApi: formApi, client: client })));
}); };
var defaultClient = new BackendClient_1.default();
var getMenuOptions = function (client, context, notifyOfChanges) {
    if (client === void 0) { client = defaultClient; }
    var saveChanges = canCommit ? formGitCommit(client) : undefined;
    return [
        {
            name: 'file',
            label: 'File',
            icon: 'cloud',
            Component: core_1.ContextSubMenu,
        },
        {
            name: 'Pull',
            label: 'Pull',
            icon: 'cloud_download',
            handler: function () { return formGitPull(client, notifyOfChanges); },
            group: 'file',
        },
        {
            name: 'savechanges',
            icon: 'cloud_upload',
            label: 'Push',
            isDisabled: function () { return !canCommit; },
            handler: function () { return saveChanges; },
            group: 'file',
        },
        {
            name: 'listCommits',
            icon: 'book',
            label: 'History',
            handler: function () { return formGetCommitsList(client); },
            group: 'file',
        },
        {
            name: 'resetchanges',
            label: 'Revert',
            icon: 'undo',
            isHidden: function () { return !context.isEdit; },
            handler: function () { return formGitReset(client); },
            group: 'file',
        },
    ];
};
var useGitButtons = function (_a) {
    var _b = (_a === void 0 ? {} : _a).client, client = _b === void 0 ? defaultClient : _b;
    var _c = react_1.useState([]), notifications = _c[0], setNotifications = _c[1];
    var context = core_1.useEditContext();
    core_1.useNotify(notifications);
    // Quickly [double-]check for changes in the upstream and master branches
    // and send notifications to the "Alerts" section.
    // Will perform on page load and after each fetch or push action initiated from UI.
    var notifyOfChanges = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var response_1, updatedRemoteBranches, isBranchOutdated, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.getChanges()];
                case 1:
                    response_1 = _b.sent();
                    if (response_1.status !== 200) {
                        throw new Error('Fetching upstream changes failed');
                    }
                    updatedRemoteBranches = Object.keys(response_1.data).filter(function (branch) { return (['upstream', 'production'].includes(branch) && response_1.data[branch].commits.length); });
                    isBranchOutdated = Boolean(updatedRemoteBranches.length);
                    if (isBranchOutdated) {
                        setNotifications([
                            {
                                id: 'upstreamChanges',
                                message: 'Your branch is outdated. Please pull remote changes.',
                            },
                        ]);
                    }
                    else if (notifications.length) {
                        setNotifications([]);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [notifications, setNotifications]);
    react_1.useEffect(function () {
        if (canAlertOnLoad) {
            notifyOfChanges();
        }
    }, []);
    var menuOptions = react_1.useMemo(function () { return getMenuOptions(client, context, notifyOfChanges); }, [notifyOfChanges]);
    core_1.useRegisterMenuOptions({
        getMenuOptions: core_1.useGetter(menuOptions),
        name: 'Git',
    });
};
exports.default = useGitButtons;
//# sourceMappingURL=useGitButtons.js.map