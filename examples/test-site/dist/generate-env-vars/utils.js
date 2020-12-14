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
exports.getCurrentGitBranch = exports.handleDetachedState = exports.getGitRepository = exports.findGitFolder = exports.jsonToEnv = exports.writeToFile = void 0;
/* eslint-disable no-console, no-return-assign, max-len */
var find_up_1 = __importDefault(require("find-up"));
var fs_1 = require("fs");
var util_1 = require("util");
var nodegit_1 = require("nodegit");
var path_1 = require("path");
var writeFilePromise = util_1.promisify(fs_1.writeFile);
exports.writeToFile = function (filePath, content) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, writeFilePromise(filePath, content, 'utf8')];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.jsonToEnv = function (envConfig, appEnv) { return __awaiter(void 0, void 0, void 0, function () {
    var envFileContent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                envFileContent = '';
                Object.keys(envConfig).forEach(function (key) { return envFileContent += key + "='" + envConfig[key] + "'\n"; });
                return [4 /*yield*/, exports.writeToFile(".env." + appEnv, envFileContent)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.findGitFolder = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, find_up_1.default('.git', { type: 'directory' })];
        case 1: return [2 /*return*/, (_a.sent()) || ''];
    }
}); }); };
exports.getGitRepository = function (repositoryPath) { return nodegit_1.Repository.open(path_1.resolve(repositoryPath)); };
exports.handleDetachedState = function (repo) {
    if (repo.headDetached()) {
        console.warn('You are in "detached HEAD" state...');
    }
    return repo;
};
exports.getCurrentGitBranch = function () { return __awaiter(void 0, void 0, void 0, function () {
    var gitBranchName, gitDir, repo, currentBranch, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                gitBranchName = process.env.PLATFORM_BRANCH || '';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, exports.findGitFolder()];
            case 2:
                gitDir = _a.sent();
                return [4 /*yield*/, exports.getGitRepository(gitDir)];
            case 3:
                repo = _a.sent();
                return [4 /*yield*/, exports.handleDetachedState(repo).getCurrentBranch()];
            case 4:
                currentBranch = _a.sent();
                if (currentBranch) {
                    gitBranchName = currentBranch.shorthand();
                }
                return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                console.warn(e_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/, gitBranchName];
        }
    });
}); };
//# sourceMappingURL=utils.js.map