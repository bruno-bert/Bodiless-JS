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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToSessionStorage = exports.getFromSessionStorage = void 0;
/* eslint-disable no-console */
exports.getFromSessionStorage = function (key, defValue) {
    if (defValue === void 0) { defValue = null; }
    var val = defValue;
    try {
        if (typeof window !== 'undefined') {
            val = JSON.parse(window.sessionStorage.getItem(key) || JSON.stringify(defValue));
        }
    }
    catch (e) {
        console.error("Can not read \"" + key + "\" from session storage.", e);
    }
    return val;
};
exports.saveToSessionStorage = function (key, val) {
    try {
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem(key, JSON.stringify(val));
        }
    }
    catch (e) {
        console.error("Can't write \"" + key + "\" to session storage.", e);
    }
};
//# sourceMappingURL=SessionStorage.js.map