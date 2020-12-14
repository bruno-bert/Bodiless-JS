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
import React, { ConsumerProps, FC } from 'react';
import { DefinesLocalEditContext, PageEditContextInterface, PageEditStoreInterface, TMenuOptionGetter } from './types';
import { TOverlaySettings } from '../Types/PageOverlayTypes';
/**
 * A Page Edit Context represents a particular state of the page editor, usually
 * defined by what element of the page is "active" or "focused". Currently, the
 * only bit of state tracked in the context are context menu options (along with
 * whether a context is "active", which can be used to highlight the component
 * which registered the context.
 * - Contexts are nested (so that a parent context is "active" when any of
 * its child contexts are active).
 * - Contexts are established using the React context API - and each PageEditContext
 * instance is a "value".
 * - The PageEditContext instance also contains a reference to the page edit store,
 * which tracks editor UI state (eg the currently active context).
 * - The react context container (created by React.createContext) of which the
 * PageEditContext instance is a value is available as a static property of the class via:
 *    - PageEditContext.context (the context object, suitable for use as a component contextType).
 *    - PageEditContext.Consumer (an observable version of PageEditContext.context.Consumer).
 *    - PageEditContext.Provider (equivalent to PageEditContext.context.Provider).
 * Singleton store.
 */
declare class PageEditContext implements PageEditContextInterface {
    readonly id: string;
    readonly name: string;
    readonly getMenuOptions: TMenuOptionGetter;
    readonly parent: PageEditContextInterface | undefined;
    readonly type: string | undefined;
    protected store: PageEditStoreInterface;
    hasLocalMenu: boolean;
    constructor(values?: DefinesLocalEditContext, parent?: PageEditContextInterface);
    protected peerContextMap: Map<string, PageEditContextInterface | null>;
    get peerContexts(): PageEditContextInterface[];
    /**
     * Registers a context as a peer.  Peer contexts contribute their menu options whenever the
     * context to which they are registered is activated.
     *
     * @param context The peer context to register.
     */
    registerPeer(context: PageEditContextInterface): void;
    /**
     * Marks a peer context as "unregistered".  An unregistered peer will not contribute
     * its menu options.
     *
     * @param context The peer context to unregister.
     */
    unregisterPeer(context: PageEditContextInterface): void;
    unregisterPeers(): void;
    static root: PageEditContext;
    static context: React.Context<PageEditContextInterface>;
    static Consumer: FC<ConsumerProps<PageEditContextInterface>>;
    static Provider: React.Provider<PageEditContextInterface>;
    spawn(values: DefinesLocalEditContext): PageEditContextInterface;
    activate(): void;
    updateMenuOptions(): void;
    get isActive(): boolean;
    get isInnermost(): boolean;
    get activeContext(): PageEditContextInterface | undefined;
    get activeDescendants(): PageEditContextInterface[] | undefined;
    get isInnermostLocalMenu(): boolean;
    get isEdit(): boolean;
    toggleEdit(on?: boolean): void;
    get isPositionToggled(): boolean;
    togglePosition(on?: boolean): void;
    get contextMenuOptions(): import("..").TMenuOption[];
    get optionMap(): Map<string, Map<string, import("..").TMenuOption>>;
    get pageOverlay(): import("./types").TPageOverlayStore;
    showPageOverlay(passedSettings: TOverlaySettings | undefined): void;
    hidePageOverlay(): void;
    showError(passedSettings: TOverlaySettings | undefined): void;
    get areLocalTooltipsDisabled(): boolean;
    toggleLocalTooltipsDisabled(isDisabled?: boolean): void;
}
export default PageEditContext;
//# sourceMappingURL=index.d.ts.map