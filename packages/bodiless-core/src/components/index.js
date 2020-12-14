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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodilessTag = exports.ReactTagsField = exports.PageOverlay = exports.StaticPage = exports.PageEditor = exports.LocalContextMenu = exports.ContextWrapper = exports.getUI = exports.ContextMenu = void 0;
var ContextMenu_1 = __importDefault(require("./ContextMenu"));
exports.ContextMenu = ContextMenu_1.default;
var ContextWrapper_1 = __importDefault(require("./ContextWrapper"));
exports.ContextWrapper = ContextWrapper_1.default;
var LocalContextMenu_1 = __importDefault(require("./LocalContextMenu"));
exports.LocalContextMenu = LocalContextMenu_1.default;
var PageEditor_1 = __importDefault(require("./PageEditor"));
exports.PageEditor = PageEditor_1.default;
var StaticPage_1 = __importDefault(require("./StaticPage"));
exports.StaticPage = StaticPage_1.default;
var PageOverlay_1 = __importDefault(require("./PageOverlay"));
exports.PageOverlay = PageOverlay_1.default;
var ContextMenuContext_1 = require("./ContextMenuContext");
Object.defineProperty(exports, "getUI", { enumerable: true, get: function () { return ContextMenuContext_1.getUI; } });
var ReactTagsField_1 = __importStar(require("./ReactTagsField"));
exports.ReactTagsField = ReactTagsField_1.default;
Object.defineProperty(exports, "BodilessTag", { enumerable: true, get: function () { return ReactTagsField_1.BodilessTag; } });
//# sourceMappingURL=index.js.map