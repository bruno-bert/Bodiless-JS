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
exports.mergeWithBodilessConfigs = exports.mergeConfigs = exports.getBodilessConfigs = exports.getTailwindConfigs = void 0;
var getBodilessConfigs_1 = require("./getBodilessConfigs");
Object.defineProperty(exports, "getTailwindConfigs", { enumerable: true, get: function () { return getBodilessConfigs_1.getTailwindConfigs; } });
Object.defineProperty(exports, "getBodilessConfigs", { enumerable: true, get: function () { return getBodilessConfigs_1.getBodilessConfigs; } });
var mergeConfigs_1 = require("./mergeConfigs");
Object.defineProperty(exports, "mergeConfigs", { enumerable: true, get: function () { return mergeConfigs_1.mergeConfigs; } });
Object.defineProperty(exports, "mergeWithBodilessConfigs", { enumerable: true, get: function () { return mergeConfigs_1.mergeWithBodilessConfigs; } });
//# sourceMappingURL=index.js.map