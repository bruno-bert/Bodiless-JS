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
import { AxiosPromise } from 'axios';
import Item from './GatsbyMobxStoreItem';
import { ItemStateEvent } from './types';
export declare type DataSource = {
    slug: string;
};
declare type GatsbyNode = {
    node: {
        content: string;
        name: string;
    };
};
export declare type GatsbyData = {
    [collection: string]: {
        edges: GatsbyNode[];
    };
};
declare type Client = {
    savePath(resourcePath: string, data: any): AxiosPromise<any>;
    deletePath(resourcePath: string): AxiosPromise<any>;
};
/**
 * Query names returned by GraphQL as object keys, with query results
 * contained in the edges property.
 *
 * Query names can be dynamic therefore is best to not hardcode the query names.
 */
export default class GatsbyMobxStore {
    store: Map<string, Item>;
    client: Client;
    slug: string | null;
    data: any;
    constructor(nodeProvider: DataSource);
    private getPendingItems;
    setNodeProvider(nodeProvider: DataSource): void;
    private parseData;
    /**
     * Called at initial page render to initialize our data from the Gatsby Page Query.
     * Note - we just copy the results to our unobserved data structure unless modifications
     * have been made, in which case we update the observable store.
     *
     * @param gatsbyData
     */
    updateData(gatsbyData: GatsbyData): void;
    getKeys: () => string[];
    getNode: (keyPath: string[]) => any;
    setItem: (key: string, item: Item) => void;
    deleteItem: (key: string, soft?: boolean) => boolean | void;
    /**
     * Mobx action saves or updates items to GatsbyMobxStore.store.
     */
    setNode: (keyPath: string[], value?: {}, event?: ItemStateEvent) => void;
    getChildrenNodes: (keyPath: string[]) => [string, Item][];
    deleteNode: (keyPath: string[]) => void;
    hasError: () => boolean;
}
export {};
//# sourceMappingURL=GatsbyMobxStore.d.ts.map