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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@bodiless/core");
var renderSelectableList = function (commits) {
    var options = commits.map(function (commit) {
        var hash = commit.hash, date = commit.date, author = commit.author, title = commit.title;
        return (react_1.default.createElement("label", { className: "bl-flex bl-mb-grid-3", key: hash, htmlFor: hash },
            react_1.default.createElement("input", { id: hash, type: "radio", name: "commits", value: hash, className: "bl-m-grid-3" }),
            react_1.default.createElement("div", null,
                date,
                react_1.default.createElement("br", null),
                author,
                react_1.default.createElement("br", null),
                title,
                react_1.default.createElement("br", null))));
    });
    return (react_1.default.createElement("div", { className: "bl-h-xl-grid-1 bl-overflow-auto bl-max-w-xl-grid-4" }, options));
};
var handleResponse = function (responseData) {
    var stdout = responseData.stdout, stderr = responseData.stderr;
    if (stderr) {
        return stderr;
    }
    var commits = stdout.split('\n\n').map(function (commit) {
        var _a = commit.split('\n'), hash = _a[0], date = _a[1], author = _a[2], title = _a[3];
        return {
            hash: hash,
            date: date,
            author: author,
            title: title,
        };
    });
    return renderSelectableList(commits);
};
/* const WrappedSpinner = () => (
  <div className="bl-pt-5">
    <Spinner color="bl-bg-white" />
  </div>
); */
var WrappedSpinner = function () { return (react_1.default.createElement("div", { className: "bl-pt-5" },
    react_1.default.createElement("div", null, "Spinner..."))); };
var CommitsList = function (_a) {
    var client = _a.client, ui = _a.ui;
    var ComponentFormWarning = core_1.getUI(ui).ComponentFormWarning;
    var _b = react_1.useState({ content: react_1.default.createElement(WrappedSpinner, null) }), state = _b[0], setState = _b[1];
    var context = core_1.useEditContext();
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        context.showPageOverlay({
                            hasSpinner: false,
                            maxTimeoutInSeconds: 10,
                        });
                        return [4 /*yield*/, client.getLatestCommits()];
                    case 1:
                        response = _a.sent();
                        setState({
                            content: handleResponse(response.data),
                        });
                        context.hidePageOverlay();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        errorMessage = error_1.message || 'An unexpected error has occurred';
                        setState({
                            content: react_1.default.createElement(ComponentFormWarning, null, errorMessage),
                        });
                        context.hidePageOverlay();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var content = state.content;
    return content;
};
exports.default = CommitsList;
//# sourceMappingURL=CommitsList.js.map