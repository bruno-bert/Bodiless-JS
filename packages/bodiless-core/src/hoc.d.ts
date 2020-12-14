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
import React, { ComponentType as CT, EventHandler } from 'react';
/**
 * Removes the specified props from the wrapped component.
 * @param ...keys The names of the props to remove.
 */
export declare const withoutProps: <Q extends object>(keys: string | string[], ...restKeys: string[]) => <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => (props: P & Q) => JSX.Element;
/**
 * Utility hoc to add an event handler which extends any handler passed to
 * the original component.
 *
 * Only adds the extension when in edit mode.
 *
 * @param event The name of the event whose handler is to be extended
 * @param useExtender Custom hook returning the handler to add. Will be invoked
 *        during render and receive the original props of the component.
 *
 * @return An HOC which will add the handler.
 */
export declare const withExtendHandler: <P extends object>(event: string, useExtender: (props: P) => EventHandler<any>) => (Component: React.ComponentType<P>) => (props: P) => JSX.Element;
export declare const withOnlyProps: <Q extends object>(...keys: string[]) => <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => React.FC<P & Q>;
export declare const withContextActivator: (event: string) => (Component: CT<any>) => React.FunctionComponent<any>;
export declare const withLocalContextMenu: (Component: CT<any> | string) => {
    (props: any): JSX.Element;
    displayName: string;
};
export declare const withNodeDataHandlers: (defaultData?: any) => (Component: CT<any>) => React.FunctionComponent<any>;
export declare const withNodeAndHandlers: (defaultData?: any) => (...args: any[]) => any;
export declare type ClickOutsideProps = {
    onClickOutside?: (e: KeyboardEvent | MouseEvent) => void;
};
/**
 * Utility hoc to add onClickOutside handler to the original component.
 * A callback will be executed on both click outside as well as on the `esc` keypress.
 *
 * @return An HOC which will add the handler.
 */
export declare const withClickOutside: <P extends object>(Component: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => (props: P & ClickOutsideProps) => JSX.Element;
//# sourceMappingURL=hoc.d.ts.map