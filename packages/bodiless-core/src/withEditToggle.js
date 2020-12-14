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
exports.ifReadOnly = exports.ifEditable = exports.useEditToggle = void 0;
var hooks_1 = require("./hooks");
var withFlowToggle_1 = require("./withFlowToggle");
exports.useEditToggle = function () {
    var context = hooks_1.useEditContext();
    return context.isEdit;
};
exports.ifEditable = withFlowToggle_1.ifToggledOn(exports.useEditToggle);
exports.ifReadOnly = withFlowToggle_1.ifToggledOff(exports.useEditToggle);
//# sourceMappingURL=withEditToggle.js.map