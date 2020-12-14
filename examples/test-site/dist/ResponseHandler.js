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
// eslint-disable-next-line arrow-body-style
var isResponseSuccessful = function (res) {
    return res.status === 200 || res.status === 201;
};
var handle = function (promise) { return promise
    .then(function (res) {
    if (!isResponseSuccessful(res)) {
        return {
            response: false,
            message: 'An unknown error has occured.',
        };
    }
    return {
        response: true,
        message: 'Success!',
    };
})
    .catch(function (err) {
    // Use back-end crafted error message if available.
    if (err.response && err.response.data) {
        return {
            response: false,
            message: err.response.data,
        };
    }
    return {
        response: false,
        message: err.message,
    };
}); };
exports.default = handle;
//# sourceMappingURL=ResponseHandler.js.map