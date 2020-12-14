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
import { FC, ComponentType } from 'react';
import { ContextWrapperProps } from '@bodiless/core';
import { Props as NodeProviderProps } from './GatsbyNodeProvider';
import { Props as PageProviderProps } from './GatsbyPageProvider';
declare type FinalUI = {
    ContextWrapper: ComponentType<ContextWrapperProps>;
    PageEditor: ComponentType;
};
declare type UI = Partial<FinalUI>;
export declare type Props = NodeProviderProps & PageProviderProps & {
    ui?: UI;
};
declare const Page: FC<Props>;
export default Page;
//# sourceMappingURL=Page.d.ts.map