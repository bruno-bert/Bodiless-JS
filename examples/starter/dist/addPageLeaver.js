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
var addPageLeaver = function (getPendingRequests) {
    if (typeof window !== 'undefined') {
        window.addEventListener('beforeunload', function (e) {
            if (getPendingRequests().length > 0) {
                // Cancel the event
                e.preventDefault();
                // Chrome requires returnValue to be set
                e.returnValue = 'Are you sure you want to leave?';
            }
            else {
                // the absence of a returnValue property on the event
                // will guarantee the browser unload happens
                delete e.returnValue;
            }
        });
    }
};
exports.default = addPageLeaver;
//# sourceMappingURL=addPageLeaver.js.map