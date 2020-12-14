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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var walkdir_1 = __importDefault(require("walkdir"));
/**
 * locateFiles is a Promise, that walks a path finding files matching the filePattern,
 * then resolves with an array of file paths.
 * @param props
 */
var locateFiles = function (props) { return new Promise(function (resolve) {
    var startingRoot = props.startingRoot, filePattern = props.filePattern;
    var filePaths = [];
    var filter = function (dirPath, files) { return (files.filter(function (name) {
        var fullPath = path_1.default.join(dirPath, name);
        return (fs_1.default.existsSync(fullPath)
            && fs_1.default.statSync(fullPath).isDirectory()) || name.search(filePattern) !== -1;
    })); };
    var walker = walkdir_1.default(startingRoot, { filter: filter, follow_symlinks: true });
    walker.on('file', function (filePath) {
        filePaths.push(filePath);
    });
    walker.on('end', function () {
        resolve(filePaths);
    });
}); };
exports.default = locateFiles;
//# sourceMappingURL=locateFiles.js.map