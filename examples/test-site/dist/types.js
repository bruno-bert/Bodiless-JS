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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStateEvent = void 0;
var ItemStateEvent;
(function (ItemStateEvent) {
    ItemStateEvent[ItemStateEvent["UpdateFromServer"] = 0] = "UpdateFromServer";
    ItemStateEvent[ItemStateEvent["UpdateFromBrowser"] = 1] = "UpdateFromBrowser";
    ItemStateEvent[ItemStateEvent["DeleteFromBrowser"] = 2] = "DeleteFromBrowser";
    ItemStateEvent[ItemStateEvent["OnLockTimeout"] = 3] = "OnLockTimeout";
    ItemStateEvent[ItemStateEvent["OnRequestEnd"] = 4] = "OnRequestEnd";
    ItemStateEvent[ItemStateEvent["OnRequestStart"] = 5] = "OnRequestStart";
    ItemStateEvent[ItemStateEvent["OnRequestError"] = 6] = "OnRequestError";
})(ItemStateEvent = exports.ItemStateEvent || (exports.ItemStateEvent = {}));
//# sourceMappingURL=types.js.map