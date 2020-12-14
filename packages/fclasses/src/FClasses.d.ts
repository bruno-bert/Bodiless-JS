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
declare type Classes = string | string[];
declare type FClasses = {
    operation?: 'add' | 'remove';
    classes?: Classes;
    parentFClasses?: FClasses;
};
export declare type StylableProps = {
    fClasses?: FClasses;
};
declare type Classable = {
    className?: string;
};
export declare type HOC = <P extends object>(C: ComponentType<P> | string) => ComponentType<P>;
export declare type Condition = <T extends StylableProps>(args?: T) => boolean;
/**
 * Allows to add classes to a component conditionally.
 *
 * @param condition A function that is evaluated to determine whether classes should be added.
 * @returns HOC that can be used for adding classes to a component
 */
declare const addClassesIf: (condition: Condition) => (classes?: string | string[] | undefined) => {
    <P extends StylableProps>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>): React.FC<P>;
    flow: HOC;
};
/**
 * HOC which specifies that a list of classes should be added to the wrapped component's className.
 *
 * @param classes A string or array of classes to add.
 */
declare const addClasses: (classes?: string | string[] | undefined) => {
    <P extends StylableProps>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>): React.FC<P>;
    flow: HOC;
};
/**
 * Allows to remove classes from a component conditionally.
 *
 * @param condition A function that is evaluated to determine whether classes should be removed.
 * @returns HOC that can be used for removing classes from a component
 */
declare const removeClassesIf: (condition: Condition) => (classes?: string | string[] | undefined) => {
    <P extends StylableProps>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>): React.FC<P>;
    flow: HOC;
};
/**
 * HOC which specifies that a list of classes shoudl be removed from the wrapped component's
 * className.
 *
 * @param classes A string or array of classes to remove. If not specified, then *all* classes will
 * be removed.
 */
declare const removeClasses: (classes?: string | string[] | undefined) => {
    <P extends StylableProps>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>): React.FC<P>;
    flow: HOC;
};
/**
 * Makes any component or intrinsic element stylable using FClasses. When the component is
 * wrapped by `addClasses()` or `removeClasses()`, the specified operations will be applied
 * in reverse order up the component tree, so that the outermost operations take precedence.
 *
 * @param Component The component to be made stylable.
 */
declare const stylable: <P extends Classable>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => {
    (props: P & StylableProps): JSX.Element;
    displayName: string;
};
export { addClasses, addClassesIf, removeClasses, removeClassesIf, stylable, };
//# sourceMappingURL=FClasses.d.ts.map