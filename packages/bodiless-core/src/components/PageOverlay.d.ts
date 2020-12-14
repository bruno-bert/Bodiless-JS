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
import React, { ComponentType, HTMLProps } from 'react';
import { TOverlaySettings } from '../Types/PageOverlayTypes';
declare type FullUI = {
    OverlayWrapper: ComponentType<HTMLProps<HTMLDivElement>> | string;
    PopupWrapper: ComponentType<HTMLProps<HTMLDivElement>> | string;
    Button: ComponentType<HTMLProps<HTMLButtonElement>> | string;
    Spinner: ComponentType<HTMLProps<HTMLDivElement>> | string;
    Message: ComponentType<HTMLProps<HTMLDivElement>> | string;
};
export declare type UI = Partial<FullUI>;
export declare const Overlay: ({ settings, ui }: {
    settings: TOverlaySettings;
    ui: FullUI;
}) => JSX.Element;
export declare const OverlayPortal: ({ store, ui }: any) => React.ReactPortal | null;
declare const PageOverlay: ({ ui }: {
    ui: UI;
}) => JSX.Element;
export default PageOverlay;
//# sourceMappingURL=PageOverlay.d.ts.map