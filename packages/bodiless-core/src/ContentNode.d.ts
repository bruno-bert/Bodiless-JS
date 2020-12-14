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
export declare type Actions = {
    setNode(path: string[], data: any): void;
    deleteNode(path: string[]): void;
};
export declare type Getters = {
    getNode(path: string[]): any;
    getKeys(): string[];
    hasError(): boolean;
    getPagePath(): string;
    getBaseResourcePath(collection: string): string;
};
export declare type Path = string | string[];
export declare type ContentNode<D> = {
    data: D;
    setData: (data: D) => void;
    delete: (path?: Path) => void;
    keys: string[];
    path: string[];
    pagePath: string;
    baseResourcePath: string;
    child<E extends object>(path: string): ContentNode<E>;
    peer<E extends object>(path: Path): ContentNode<E>;
    hasError: () => boolean;
};
export declare class DefaultContentNode<D extends object> implements ContentNode<D> {
    protected actions: Actions;
    protected getters: Getters;
    path: string[];
    constructor(actions: Actions, getters: Getters, path: Path);
    peer<E extends object>(path: Path): DefaultContentNode<E>;
    child<E extends object>(path: Path): DefaultContentNode<E>;
    get data(): D;
    get pagePath(): string;
    get baseResourcePath(): string;
    setData(dataObj: D): void;
    delete(path?: Path): void;
    get keys(): string[];
    get hasError(): () => boolean;
    getGetters(): Getters;
    getActions(): Actions;
    static dummy(path?: string, initialData?: {}): DefaultContentNode<object>;
}
//# sourceMappingURL=ContentNode.d.ts.map