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
import React, { ComponentType as CT } from 'react';
import type { WithNodeProps, WithNodeKeyProps } from './Types/NodeTypes';
import type { EditButtonOptions, UseBodilessOverrides } from './Types/EditButtonTypes';
/**
 * Options for making a component "bodiless".
 */
export declare type Options<P, D> = EditButtonOptions<P, D> & {
    /**
     * The event used to activate the edit button.  Default is 'onClick'
     */
    activateEvent?: string;
    /**
     * An optional component to use as a wrapper in edit mode. Useful if the underlying component
     * cannot produce an activation event (eg if it does not accept an 'onClick' prop).
     */
    Wrapper?: CT<any> | string;
    /**
     * An object providing default/initial values for the editable props. Should be keyed by the
     * prop name.
     */
    defaultData?: D;
};
declare type HOC<P, Q> = (Component: CT<P> | string) => CT<Q>;
declare type BodilessProps = Partial<WithNodeProps>;
declare type AsBodiless<P, D, E = {}> = (nodeKeys?: WithNodeKeyProps, defaultData?: D, useOverrides?: UseBodilessOverrides<P, D, E>) => HOC<P, P & BodilessProps>;
/**
 * Given an event name and a wrapper component, provides an HOC which will wrap the base component
 * the wrapper, passing the event prop to the wrapper, and all other props to the base compoent.
 * @param event The event name.
 * @param Wrapper The component to wrap with
 * @private
 */
export declare const withActivatorWrapper: <P extends object>(event: string, Wrapper: CT<any> | string) => (Component: React.ComponentType<P>) => (props: P) => JSX.Element;
/**
 * Convenience HOC to plug a component into the bodiless data model.
 *
 * @param nodeKeys The nodekeys which will be used to locate the component's data.
 *
 * @param defaultData Default data to be provided for this component.
 */
declare const withBodilessData: <P extends object, D extends object>(nodeKey?: string | Partial<WithNodeProps> | undefined, defaultData?: D | undefined) => (...args: any[]) => any;
/**
 * Makes a component "Bodiless" by connecting it to the Bodiless-jS data flow and giving it
 * a form which can be used to edit its props. Returns a standard `asBodiless...` function,
 * which takes `nodeKey` and `defaultData` parameters, and returns an HOC which yields an editable
 * version of the base component.
 *
 * @param options An object describing how this component should be made editable.
 */
declare const asBodilessComponent: <P extends object, D extends object>(options: Options<P, D>) => AsBodiless<P, D, {}>;
export default asBodilessComponent;
export { withBodilessData };
export type { AsBodiless };
//# sourceMappingURL=asBodilessComponent.d.ts.map