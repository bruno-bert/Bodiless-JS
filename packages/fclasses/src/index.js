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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragment = exports.removeClassesIf = exports.addClassesIf = exports.asComponent = exports.extendDesign = exports.varyDesign = exports.extendDesignable = exports.designable = exports.withOnlyProps = exports.withoutProps = exports.hasProp = exports.flowIf = exports.remove = exports.startWith = exports.replaceOnEffect = exports.replaceWith = exports.applyDesign = exports.withFinalDesign = exports.withDesign = exports.removeClasses = exports.addClasses = exports.stylable = exports.addPropsIf = exports.addProps = void 0;
var FClasses_1 = require("./FClasses");
Object.defineProperty(exports, "stylable", { enumerable: true, get: function () { return FClasses_1.stylable; } });
Object.defineProperty(exports, "addClasses", { enumerable: true, get: function () { return FClasses_1.addClasses; } });
Object.defineProperty(exports, "removeClasses", { enumerable: true, get: function () { return FClasses_1.removeClasses; } });
Object.defineProperty(exports, "addClassesIf", { enumerable: true, get: function () { return FClasses_1.addClassesIf; } });
Object.defineProperty(exports, "removeClassesIf", { enumerable: true, get: function () { return FClasses_1.removeClassesIf; } });
var addProps_1 = __importStar(require("./addProps"));
exports.addProps = addProps_1.default;
Object.defineProperty(exports, "addPropsIf", { enumerable: true, get: function () { return addProps_1.addPropsIf; } });
var Design_1 = require("./Design");
Object.defineProperty(exports, "asComponent", { enumerable: true, get: function () { return Design_1.asComponent; } });
Object.defineProperty(exports, "applyDesign", { enumerable: true, get: function () { return Design_1.applyDesign; } });
Object.defineProperty(exports, "withDesign", { enumerable: true, get: function () { return Design_1.withDesign; } });
Object.defineProperty(exports, "replaceWith", { enumerable: true, get: function () { return Design_1.replaceWith; } });
Object.defineProperty(exports, "startWith", { enumerable: true, get: function () { return Design_1.startWith; } });
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return Design_1.remove; } });
Object.defineProperty(exports, "designable", { enumerable: true, get: function () { return Design_1.designable; } });
Object.defineProperty(exports, "extendDesignable", { enumerable: true, get: function () { return Design_1.extendDesignable; } });
Object.defineProperty(exports, "varyDesign", { enumerable: true, get: function () { return Design_1.varyDesign; } });
Object.defineProperty(exports, "extendDesign", { enumerable: true, get: function () { return Design_1.extendDesign; } });
Object.defineProperty(exports, "withFinalDesign", { enumerable: true, get: function () { return Design_1.withFinalDesign; } });
var hoc_util_1 = require("./hoc-util");
Object.defineProperty(exports, "flowIf", { enumerable: true, get: function () { return hoc_util_1.flowIf; } });
Object.defineProperty(exports, "hasProp", { enumerable: true, get: function () { return hoc_util_1.hasProp; } });
Object.defineProperty(exports, "withoutProps", { enumerable: true, get: function () { return hoc_util_1.withoutProps; } });
Object.defineProperty(exports, "withOnlyProps", { enumerable: true, get: function () { return hoc_util_1.withOnlyProps; } });
Object.defineProperty(exports, "replaceOnEffect", { enumerable: true, get: function () { return hoc_util_1.replaceOnEffect; } });
var Fragment_1 = __importDefault(require("./Fragment"));
exports.Fragment = Fragment_1.default;
__exportStar(require("./StyledHTML"), exports);
var Context_1 = require("./Context");
Object.defineProperty(exports, "withShowDesignKeys", { enumerable: true, get: function () { return Context_1.withShowDesignKeys; } });
//# sourceMappingURL=index.js.map