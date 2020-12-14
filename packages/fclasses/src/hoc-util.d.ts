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
export declare type Condition<P> = (props: P) => boolean;
export declare const flowIf: (condition: (args: any) => boolean) => <H extends Function>(...hocs: Function[]) => <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => (props: P) => JSX.Element;
/**
 * Removes the specified props from the wrapped component.
 * @param ...keys The names of the props to remove.
 */
export declare const withoutProps: <Q extends object>(keys: string | string[], ...restKeys: string[]) => <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => (props: P & Q) => JSX.Element;
export declare const withOnlyProps: <Q extends object>(...keys: string[]) => <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => React.FC<P & Q>;
export declare const hasProp: (name: string) => ({ [name]: prop }: {
    [name: string]: any;
}) => boolean;
/**
 * Like replaceWith, but performs the repacement on effect. Useful when you need to
 * ensure that both versions of a component are rendered during SSR, but want to
 * remove one when displayed in the browser (eg for responsive design).
 *
 * @param Replacement The component to replace with.
 */
export declare const replaceOnEffect: <P extends object>(Replacement: React.ComponentType<P>) => (Component: React.ComponentType<P>) => (props: P) => JSX.Element;
//# sourceMappingURL=hoc-util.d.ts.map