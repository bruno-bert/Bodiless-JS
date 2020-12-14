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
import type { ObservableMap } from 'mobx';
import type { PageEditContextInterface, PageEditStoreInterface, TPageOverlayStore } from './types';
import type { TMenuOption } from '../Types/ContextMenuTypes';
import type { TOverlaySettings } from '../Types/PageOverlayTypes';
export declare const defaultOverlaySettings: TOverlaySettings;
/**
 * @private
 *
 * Holds the current UI state for the editor.
 */
export declare class PageEditStore implements PageEditStoreInterface {
    activeContext: PageEditContextInterface | undefined;
    isEdit: any;
    isPositionToggled: any;
    pageOverlay: TPageOverlayStore;
    optionMap: ObservableMap<string, ObservableMap<string, TMenuOption>>;
    reset(): void;
    constructor(activeContext?: PageEditContextInterface);
    setActiveContext(context?: PageEditContextInterface): void;
    updateMenuOptions(context: PageEditContextInterface): string[];
    get contextMenuOptions(): TMenuOption[];
    toggleEdit(on?: boolean): void;
    togglePosition(on?: boolean): void;
    get contextTrail(): string[];
    areLocalTooltipsDisabled: boolean;
    toggleLocalTooltipsDisabled(isDisabled?: boolean): void;
}
export declare const defaultStore: PageEditStore;
//# sourceMappingURL=Store.d.ts.map