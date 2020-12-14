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
import React, { FC, ComponentType } from 'react';
import { PageContextProviderProps, MenuOptionsDefinition } from './Types/PageContextProviderTypes';
/**
 * Hook which registers additional menu options for the current context.
 *
 * @param props Props which define the menu options to add.
 */
export declare const useRegisterMenuOptions: (props: PageContextProviderProps) => void;
/**
 * Component which provides its children with a new `PageEditContext` using the specified
 * menu options.
 *
 * @param props
 */
declare const PageContextProvider: FC<PageContextProviderProps>;
declare type MenuOptionsDefinition$<P> = MenuOptionsDefinition<P> | ((props: P) => MenuOptionsDefinition<P>);
/**
 * Using supplied options, returns an HOC which adds one or more menu options (buttons).
 * This simplly wraps the supplied component with a `PageContextProvider`.
 *
 * Note that, unlike `PageContexProvider` itself, this function takes a custom hook
 * (`useMenuOptions`), which is invoked to create the 'getMenuOptions' prop
 * for `PageContextProvider`.  This allows you to use props and context at render
 * time to create your `getMenuOptions` callback.
 *
 * Based on the value of the `peer` option, this will associate the menu options either
 * with a new local context (`peer === false`, the default), or with the existing one.
 *
 * @param def The definition of the menu options to be provided.
 *
 * @return An HOC which will cause the component it enhances to contribute the specified
 *         menu options when placed.
 */
export declare const withMenuOptions: <P extends object>(def$: MenuOptionsDefinition$<P>) => (Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => (props: P) => JSX.Element;
export default PageContextProvider;
//# sourceMappingURL=PageContextProvider.d.ts.map