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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PageEditContext_1 = __importDefault(require("./PageEditContext"));
var hooks_1 = require("./hooks");
var ReadOnlyContext = /** @class */ (function (_super) {
    __extends(ReadOnlyContext, _super);
    function ReadOnlyContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ReadOnlyContext.prototype, "isEdit", {
        // eslint-disable-next-line class-methods-use-this
        get: function () { return false; },
        enumerable: false,
        configurable: true
    });
    return ReadOnlyContext;
}(PageEditContext_1.default));
var asReadOnly = function (Component) { return function (props) {
    var oldContext = hooks_1.useEditContext();
    // @ts-ignore: root context has no parent.
    var newContext = new ReadOnlyContext(oldContext, oldContext.parent);
    return (react_1.default.createElement(PageEditContext_1.default.Provider, { value: newContext },
        react_1.default.createElement(Component, __assign({}, props))));
}; };
exports.default = asReadOnly;
//# sourceMappingURL=asReadOnly.js.map