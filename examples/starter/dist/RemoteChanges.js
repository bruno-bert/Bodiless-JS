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
exports.FetchChanges = exports.PullChanges = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var core_1 = require("@bodiless/core");
//import { ComponentFormSpinner, ComponentFormWarning } from '@bodiless/ui';
var ui_1 = require("@bodiless/ui");
var informed_1 = require("informed");
var MessageCode;
(function (MessageCode) {
    MessageCode[MessageCode["Default"] = 0] = "Default";
    MessageCode[MessageCode["PullErrored"] = 1000] = "PullErrored";
    MessageCode[MessageCode["PullNoChange"] = 1001] = "PullNoChange";
    MessageCode[MessageCode["PullRestartRequired"] = 1002] = "PullRestartRequired";
    MessageCode[MessageCode["PullSuccess"] = 1003] = "PullSuccess";
    MessageCode[MessageCode["PullConflictConfirm"] = 1004] = "PullConflictConfirm";
    MessageCode[MessageCode["PullConflictAbort"] = 1005] = "PullConflictAbort";
    MessageCode[MessageCode["PullMasterAbort"] = 1006] = "PullMasterAbort";
    MessageCode[MessageCode["PullUpstreamAbort"] = 1007] = "PullUpstreamAbort";
    MessageCode[MessageCode["PullChangeAvailable"] = 1008] = "PullChangeAvailable";
    MessageCode[MessageCode["PullMasterAvailable"] = 1009] = "PullMasterAvailable";
    MessageCode[MessageCode["PullNonContentOnly"] = 1010] = "PullNonContentOnly";
})(MessageCode || (MessageCode = {}));
/**
 * Component for showing and pulling remote changes.
 *
 * @component
 * @param {BackendClient} client
 * @constructor
 */
var RemoteChanges = function (_a) {
    var client = _a.client, notifyOfChanges = _a.notifyOfChanges;
    var formApi = informed_1.useFormApi();
    // @Todo revise the use of formState, possibly use informed multistep.
    if (formApi.getState().submits === 0) {
        return (react_1.default.createElement(FetchChanges, { client: client, formApi: formApi, notifyOfChanges: notifyOfChanges }));
    }
    return (react_1.default.createElement(PullChanges, { client: client, formApi: formApi, notifyOfChanges: notifyOfChanges }));
};
var mapResponse = function (response) { return ({
    hasUpdates: !!response.commits.length || !!response.files.length,
    files: response.files,
}); };
var getRemoteStatus = function (responseData) { return ({
    upstream: mapResponse(responseData.upstream),
    production: mapResponse(responseData.production),
    local: mapResponse(responseData.local),
}); };
var isContentOnly = function (files) { return files.every(function (file) { return file.search(/\.json$/g) !== -1; }); };
var FormMessages = function (_a) {
    var messageCode = _a.messageCode, messageData = _a.messageData;
    switch (messageCode) {
        case MessageCode.PullMasterAvailable:
            return (react_1.default.createElement(react_1.default.Fragment, null, "There are master changes available to be pulled. Click check (\u2713) to initiate."));
        case MessageCode.PullConflictConfirm: {
            var pages = messageData.pages.map(function (page) { return (react_1.default.createElement("li", null, page)); });
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ui_1.ComponentFormWarning, null, "Changes you have recently made in your Edit Environment conflict with changes that have been made to production since the last time you pulled changes. You can choose to have your changes override the production changes in your changeset, by clicking the check. Or, you can dismiss this dialogue and contact your development team for assistance."),
                react_1.default.createElement("div", { className: "py-1 px-20" },
                    "Conflict pages:",
                    messageData.pages.length > 0 && react_1.default.createElement("ul", { className: "list-disc px-3" }, pages),
                    messageData.site.length > 0 && react_1.default.createElement("p", null, "A change that affects multiple pages"))));
        }
        case MessageCode.PullConflictAbort:
            return (react_1.default.createElement(ui_1.ComponentFormWarning, null, "Changes are available but cannot be pulled, contact your development team for assistance. (Code: " + MessageCode.PullConflictAbort + ")"));
        case MessageCode.PullNoChange:
            return (react_1.default.createElement(react_1.default.Fragment, null, "No changes are available, your Edit Environment is up to date!"));
        case MessageCode.PullMasterAbort:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ui_1.ComponentFormWarning, null, "There are changes on production which cannot be merged from the UI.")));
        case MessageCode.PullChangeAvailable:
            return (react_1.default.createElement(react_1.default.Fragment, null, "There are updates available to be pulled. Click check (\u2713) to initiate."));
        case MessageCode.PullRestartRequired:
            return (react_1.default.createElement(ui_1.ComponentFormWarning, null, "Changes are available but cannot be pulled, contact your development team for assistance. (code " + MessageCode.PullRestartRequired + ")"));
        case MessageCode.PullUpstreamAbort:
            return (react_1.default.createElement(ui_1.ComponentFormWarning, null, "Upstream changes are available but cannot be fetched via the UI."));
        case MessageCode.PullNonContentOnly:
            return (react_1.default.createElement(ui_1.ComponentFormWarning, null, "Changes are available but cannot be pulled, contact your development team for assistance. (code " + MessageCode.PullNonContentOnly + ")"));
        case MessageCode.PullErrored:
            return (react_1.default.createElement(ui_1.ComponentFormWarning, null, "An error has occurred, please try Pull again in a few minutes.\n            (code " + MessageCode.PullErrored + ")"));
        default:
            //return <ComponentFormSpinner />;
            return react_1.default.createElement("div", null, "Spinner...");
    }
};
/**
 * Component for fetching & showing remote changes.
 *
 * @component
 * @param {BackendClient} client
 * @param formApi
 * @constructor
 */
var FetchChanges = function (_a) {
    var client = _a.client, formApi = _a.formApi, notifyOfChanges = _a.notifyOfChanges;
    var _b = react_1.useState({
        messageCode: MessageCode.Default,
        messageData: '',
    }), state = _b[0], setState = _b[1];
    var context = core_1.useEditContext();
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, _a, production, upstream, local, upstreamConflicts, localConflictsResponse, pages, site, localConflictsResponse, pages, site, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 14, 15, 16]);
                        context.showPageOverlay({
                            hasSpinner: false,
                        });
                        return [4 /*yield*/, client.getChanges()];
                    case 1:
                        response = _b.sent();
                        if (response.status !== 200) {
                            throw new Error("Error pulling changes, status=" + response.status);
                        }
                        _a = getRemoteStatus(response.data), production = _a.production, upstream = _a.upstream, local = _a.local;
                        if (!production.hasUpdates) return [3 /*break*/, 12];
                        // @todo: refactor restart check with function.
                        formApi.setValue('keepOpen', true);
                        if (!production.files.some(function (file) { return file.includes('package-lock.json'); })) return [3 /*break*/, 2];
                        setState({ messageCode: MessageCode.PullRestartRequired, messageData: [] });
                        formApi.setValue('mergeMaster', false);
                        formApi.setValue('keepOpen', false);
                        return [3 /*break*/, 11];
                    case 2:
                        if (!(!local.hasUpdates && !upstream.hasUpdates)) return [3 /*break*/, 3];
                        // No local changes.
                        setState({ messageCode: MessageCode.PullChangeAvailable, messageData: [] });
                        formApi.setValue('mergeMaster', true);
                        return [3 /*break*/, 11];
                    case 3: return [4 /*yield*/, client.getConflicts()];
                    case 4:
                        upstreamConflicts = _b.sent();
                        if (upstreamConflicts.status !== 200) {
                            throw new Error("Error checking conflicts with the master branch, status=" + response.status);
                        }
                        if (!upstreamConflicts.data.hasConflict) return [3 /*break*/, 9];
                        if (!!isContentOnly(upstreamConflicts.data.files)) return [3 /*break*/, 5];
                        setState({ messageCode: MessageCode.PullNonContentOnly, messageData: [] });
                        formApi.setValue('mergeMaster', false);
                        formApi.setValue('keepOpen', false);
                        return [3 /*break*/, 8];
                    case 5:
                        if (!upstream.hasUpdates) return [3 /*break*/, 6];
                        // Production conflict with upstream with un-pulled upstream updates
                        // Updates can't be merged.
                        setState({ messageCode: MessageCode.PullConflictAbort, messageData: [] });
                        formApi.setValue('mergeMaster', false);
                        formApi.setValue('keepOpen', false);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, client.getConflicts('edit')];
                    case 7:
                        localConflictsResponse = _b.sent();
                        pages = lodash_1.default.uniq(__spreadArrays(upstreamConflicts.data.pages, localConflictsResponse.data.pages));
                        site = lodash_1.default.uniq(__spreadArrays(upstreamConflicts.data.site, localConflictsResponse.data.site));
                        setState({
                            messageCode: MessageCode.PullConflictConfirm,
                            messageData: { pages: pages, site: site },
                        });
                        formApi.setValue('mergeMaster', true);
                        _b.label = 8;
                    case 8: return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, client.getConflicts('edit')];
                    case 10:
                        localConflictsResponse = _b.sent();
                        if (localConflictsResponse.data.hasConflict) {
                            pages = localConflictsResponse.data.pages;
                            site = localConflictsResponse.data.site;
                            setState({
                                messageCode: MessageCode.PullConflictConfirm,
                                messageData: { pages: pages, site: site },
                            });
                            formApi.setValue('mergeMaster', true);
                        }
                        else {
                            // If there are conflicts between CHANGESET and EDIT, but no conflicts with
                            // PRODUCTION, then these are resolved silently in favor of EDIT.
                            setState({ messageCode: MessageCode.PullChangeAvailable, messageData: [] });
                            formApi.setValue('mergeMaster', true);
                        }
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (upstream.hasUpdates) {
                            setState({ messageCode: MessageCode.PullChangeAvailable, messageData: [] });
                            formApi.setValue('mergeMaster', true);
                            formApi.setValue('keepOpen', true);
                        }
                        else {
                            setState({ messageCode: MessageCode.PullNoChange, messageData: [] });
                            formApi.setValue('mergeMaster', false);
                            formApi.setValue('keepOpen', false);
                        }
                        _b.label = 13;
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        error_1 = _b.sent();
                        setState({
                            messageCode: MessageCode.PullErrored,
                            messageData: error_1.message,
                        });
                        return [3 /*break*/, 16];
                    case 15:
                        notifyOfChanges();
                        context.hidePageOverlay();
                        return [7 /*endfinally*/];
                    case 16: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var messageCode = state.messageCode, messageData = state.messageData;
    return react_1.default.createElement(FormMessages, { messageCode: messageCode, messageData: messageData });
};
exports.FetchChanges = FetchChanges;
/**
 * Component for pulling remote changes.
 *
 * @component
 * @param {BackendClient} client
 * @param formApi
 * @constructor
 */
var PullChanges = function (_a) {
    var client = _a.client, formApi = _a.formApi, notifyOfChanges = _a.notifyOfChanges;
    var _b = react_1.useState({
        complete: false,
        error: '',
    }), pullStatus = _b[0], setPullStatus = _b[1];
    var context = core_1.useEditContext();
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var mergeResponse, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, 5, 6]);
                        context.showPageOverlay({
                            hasSpinner: false,
                        });
                        if (!formApi.getValue('mergeMaster')) return [3 /*break*/, 2];
                        return [4 /*yield*/, client.mergeMaster()];
                    case 1:
                        mergeResponse = _a.sent();
                        if (mergeResponse.status !== 200) {
                            throw new Error("Error merging production changes to upstream, status=" + mergeResponse.status);
                        }
                        formApi.setValue('mergeMaster', false);
                        _a.label = 2;
                    case 2: return [4 /*yield*/, client.pull()];
                    case 3:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new Error("Error pulling changes, status=" + response.status);
                        }
                        setPullStatus({ complete: true });
                        formApi.setValue('refreshWhenDone', true);
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        setPullStatus({
                            complete: false,
                            error: error_2.message || 'An unexpected error has occurred.',
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        formApi.setValue('keepOpen', false);
                        context.hidePageOverlay();
                        notifyOfChanges();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var complete = pullStatus.complete, error = pullStatus.error;
    if (error)
        return react_1.default.createElement(react_1.default.Fragment, null, error);
    if (complete) {
        return react_1.default.createElement(react_1.default.Fragment, null, "Pull success, your Edit Environment is up to date!");
    }
    //return <ComponentFormSpinner />;
    return react_1.default.createElement("div", null, "Spinner...");
};
exports.PullChanges = PullChanges;
exports.default = RemoteChanges;
//# sourceMappingURL=RemoteChanges.js.map