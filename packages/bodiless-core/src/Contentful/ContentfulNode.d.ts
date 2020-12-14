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
import { DefaultContentNode, Path } from '../ContentNode';
export declare const getRelativeNodeKey: (basePath: Path, nodePath: Path) => string;
export declare const getAbsoluteNodeKey: (basePath: Path, contentPath: Path) => string;
export default class ContentfulNode<D extends object> extends DefaultContentNode<D> {
    private baseContentPath;
    private content;
    static create(node: DefaultContentNode<object>, content: object): ContentfulNode<object>;
    private getContentKey;
    private getDefaultContent;
    setContent(content: D): void;
    setBaseContentPath(path: Path): void;
    get data(): any;
    get keys(): string[];
    peer(path: Path): ContentfulNode<object>;
}
//# sourceMappingURL=ContentfulNode.d.ts.map