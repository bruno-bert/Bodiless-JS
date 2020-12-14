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
exports.BodilessTag = void 0;
var react_1 = __importDefault(require("react"));
var uuid_1 = require("uuid");
var informed_1 = require("informed");
var react_tag_autocomplete_1 = __importDefault(require("react-tag-autocomplete"));
var Tag = /** @class */ (function () {
    function Tag(name) {
        if (name === void 0) { name = ''; }
        this.id = uuid_1.v4();
        this.name = '';
        this.name = name;
    }
    return Tag;
}());
exports.BodilessTag = Tag;
var ReactTagsField = function (props) {
    var formApi = informed_1.useFormApi();
    var currentTags = formApi.getValue('tags') || [];
    var allowMultipleTags = props.allowMultipleTags, rest = __rest(props, ["allowMultipleTags"]);
    var handleAddition = function (tag) {
        var tagToAdd = tag;
        if (!tag.id) {
            tagToAdd = new Tag(tag.name);
        }
        if (!currentTags.some(function (currentTag) { return currentTag.name === tagToAdd.name; })) {
            var newTags = allowMultipleTags ? __spreadArrays(currentTags, [tagToAdd]) : [tagToAdd];
            formApi.setValue('tags', newTags);
        }
    };
    var handleDelete = function (i) {
        var newTags = currentTags.slice(0);
        newTags.splice(i, 1);
        formApi.setValue('tags', newTags);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(informed_1.Text, { type: "hidden", field: "tags" }),
        react_1.default.createElement(react_tag_autocomplete_1.default, __assign({}, rest, { tags: currentTags, handleDelete: handleDelete, handleAddition: handleAddition }))));
};
exports.default = ReactTagsField;
//# sourceMappingURL=ReactTagsField.js.map