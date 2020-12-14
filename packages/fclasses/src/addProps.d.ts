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
import React, { ComponentType } from 'react';
/**
 * HOC that adds properties to a Component
 * @param propsToAdd
 */
declare const addProps: <P extends object, Q extends object>(propsToAdd: Q) => (Component: React.ComponentType<P>) => (props: P) => JSX.Element;
/**
 * HOC that adds props conditionally based on value returned by hook.
 */
export declare const addPropsIf: <P extends object, Q extends object>(conditionHook: (props: P) => boolean) => (propsToAdd: Q) => (Component: React.ComponentType<P>) => (props: P) => JSX.Element;
export default addProps;
//# sourceMappingURL=addProps.d.ts.map