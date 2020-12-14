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
//import { ComponentFormSpinner } from '@bodiless/ui';
var BackendClient_1 = __importDefault(require("./BackendClient"));
var ResponseHandler_1 = __importDefault(require("./ResponseHandler"));
var PageVerification_1 = __importDefault(require("./PageVerification"));
var GatsbyPageProvider_1 = require("./GatsbyPageProvider");
var NewPageState;
(function (NewPageState) {
    NewPageState[NewPageState["Init"] = 0] = "Init";
    NewPageState[NewPageState["Pending"] = 1] = "Pending";
    NewPageState[NewPageState["Complete"] = 2] = "Complete";
    NewPageState[NewPageState["Errored"] = 3] = "Errored";
})(NewPageState || (NewPageState = {}));
var createPage = function (_a) {
    var path = _a.path, client = _a.client, template = _a.template;
    return __awaiter(void 0, void 0, void 0, function () {
        var pathname, newPagePath, result, isPageVerified, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    pathname = window.location.pathname
                        ? window.location.pathname.replace(/\/?$/, '/')
                        : '';
                    newPagePath = pathname + path;
                    return [4 /*yield*/, ResponseHandler_1.default(client.savePage(newPagePath, template))];
                case 1:
                    result = _b.sent();
                    if (!result.response) return [3 /*break*/, 3];
                    return [4 /*yield*/, PageVerification_1.default(newPagePath)];
                case 2:
                    isPageVerified = _b.sent();
                    if (!isPageVerified) {
                        errorMessage = "Unable to verify page creation.\n        It is likely that your new page was created but is not yet available.\n        Click ok to visit the new page; if it does not load, wait a while and reload.";
                        return [2 /*return*/, Promise.reject(new Error(errorMessage))];
                    }
                    return [2 /*return*/, Promise.resolve(newPagePath)];
                case 3:
                    if (result.message) {
                        return [2 /*return*/, Promise.reject(new Error(result.message))];
                    }
                    return [2 /*return*/, Promise.reject(new Error('An internal error occurred. Please try again later.'))];
            }
        });
    });
};
var NewPageComp = function (props) {
    var status = props.status, ui = props.ui, errors = props.errors, errorMessage = props.errorMessage, newPagePath = props.newPagePath;
    var _a = core_1.getUI(ui), ComponentFormLabel = _a.ComponentFormLabel, ComponentFormDescription = _a.ComponentFormDescription, ComponentFormText = _a.ComponentFormText, ComponentFormWarning = _a.ComponentFormWarning, ComponentFormTitle = _a.ComponentFormTitle, ComponentFormLink = _a.ComponentFormLink;
    // ensure trailing slash is present
    var currentPage = window.location.href.replace(/\/?$/, '/');
    var formTitle = 'Add a New Page';
    switch (status) {
        case NewPageState.Init: {
            var validate = react_1.useCallback(function (value) { return (!value || !RegExp(/^[a-z0-9_-]+$/i).test(value)
                ? 'No special characters or spaces allowed'
                : undefined); }, []);
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, formTitle),
                react_1.default.createElement(ComponentFormLabel, { htmlFor: "new-page-path" },
                    "URL",
                    react_1.default.createElement("br", null), currentPage + "..."),
                react_1.default.createElement(ComponentFormText, { field: "path", id: "new-page-path", validate: validate, validateOnChange: true, validateOnBlur: true }),
                errors && errors.path && (react_1.default.createElement(ComponentFormWarning, null, errors.path))));
        }
        case NewPageState.Pending:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, "Creating Page")));
        case NewPageState.Complete:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, "Operation Complete"),
                react_1.default.createElement(ComponentFormDescription, null,
                    react_1.default.createElement(ComponentFormLink, { href: newPagePath, id: "new-page-link" }, "Click here to visit the new page: " + newPagePath))));
        case NewPageState.Errored:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComponentFormTitle, null, formTitle),
                react_1.default.createElement(ComponentFormWarning, null, errorMessage)));
        default: return (react_1.default.createElement(react_1.default.Fragment, null));
    }
};
var formPageAdd = function (client, template) { return core_1.contextMenuForm({
    submitValues: function (_a) {
        var keepOpen = _a.keepOpen;
        return keepOpen;
    },
    hasSubmit: function (_a) {
        var keepOpen = _a.keepOpen;
        return keepOpen;
    },
})(function (_a) {
    var formState = _a.formState, ui = _a.ui, formApi = _a.formApi;
    var ComponentFormText = core_1.getUI(ui).ComponentFormText;
    var submits = formState.submits, errors = formState.errors, invalid = formState.invalid, values = formState.values;
    var _b = react_1.useState({
        status: NewPageState.Init,
    }), state = _b[0], setState = _b[1];
    var context = core_1.useEditContext();
    var path = values.path;
    react_1.useEffect(function () {
        // If the form is submitted and valid then lets try to creat a page.
        if (submits && path && invalid === false) {
            context.showPageOverlay({ hasSpinner: false });
            setState({ status: NewPageState.Pending });
            // Create the page.
            createPage({ path: path, client: client, template: template })
                .then(function (newPagePath) {
                if (newPagePath) {
                    setState({ status: NewPageState.Complete, newPagePath: newPagePath });
                }
            })
                .catch(function (err) {
                setState({ status: NewPageState.Errored, errorMessage: err.message });
            })
                .finally(function () {
                context.hidePageOverlay();
                formApi.setValue('keepOpen', false);
            });
        }
    }, [submits]);
    var status = state.status, errorMessage = state.errorMessage, newPagePath = state.newPagePath;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ComponentFormText, { type: "hidden", field: "keepOpen", initialValue: true }),
        react_1.default.createElement(NewPageComp, { status: status, ui: ui, errorMessage: errorMessage, errors: errors, newPagePath: newPagePath })));
}); };
var defaultClient = new BackendClient_1.default();
var useMenuOptions = function () {
    var context = core_1.useEditContext();
    var gatsbyPage = GatsbyPageProvider_1.useGatsbyPageContext();
    var menuOptions = [
        {
            name: 'newpage',
            icon: 'note_add',
            label: 'Page',
            isHidden: react_1.useCallback(function () { return !context.isEdit; }, []),
            handler: function () { return formPageAdd(defaultClient, gatsbyPage.subPageTemplate); },
        },
    ];
    return menuOptions;
};
var withNewPageButton = core_1.withMenuOptions({
    useMenuOptions: useMenuOptions,
    name: 'NewPage',
    peer: true,
});
exports.default = withNewPageButton;
//# sourceMappingURL=withNewPageButton.js.map