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
import React, { FC } from 'react';
import { IContextMenuProps as ContextMenuProps } from '../Types/ContextMenuTypes';
declare type CompleteUI = {
    GlobalContextMenu: React.ComponentType<ContextMenuProps>;
    LocalContextMenu: React.ComponentType<ContextMenuProps>;
    PageOverlay?: FC;
};
export declare type UI = Partial<CompleteUI>;
export declare type Props = {
    ui?: UI;
};
export declare const useUI: () => CompleteUI;
declare const _default: React.FunctionComponent<Props>;
export default _default;
//# sourceMappingURL=PageEditor.d.ts.map