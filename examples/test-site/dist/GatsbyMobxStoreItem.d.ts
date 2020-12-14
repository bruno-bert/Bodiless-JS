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
import GatsbyMobxStore from './GatsbyMobxStore';
import { ItemStateEvent } from './types';
declare enum ItemState {
    Clean = 0,
    Flushing = 1,
    Locked = 2,
    Queued = 3
}
export declare const DEFAULT_REQUEST_DELAY = 2000;
export default class GatsbyMobxStoreItem {
    data: {};
    state: ItemState;
    isDeleted: boolean;
    hasFlushingError: boolean;
    key: string;
    store: GatsbyMobxStore;
    lockTimeout?: ReturnType<typeof setTimeout>;
    requestTimeout?: ReturnType<typeof setTimeout>;
    requestDelay: number;
    private shouldAccept;
    private shouldSave;
    private setData;
    private setState;
    private updateState;
    private getResoucePath;
    private request;
    private scheduleRequest;
    private setLockTimeout;
    constructor(store: GatsbyMobxStore, key: string, initialData?: {}, event?: ItemStateEvent);
    update(data?: {}, event?: ItemStateEvent): void;
    delete(): void;
    isPending(): boolean;
    isClean(): boolean;
}
export {};
//# sourceMappingURL=GatsbyMobxStoreItem.d.ts.map