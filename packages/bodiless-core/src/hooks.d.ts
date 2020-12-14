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
import { EventHandler } from 'react';
export declare const useEditContext: () => import(".").PageEditContextInterface;
export declare const useUUID: () => string;
/**
 * Utility hook to extend an existing handler.
 * Only applies the extension when in edit mode.
 *
 * @param event The name of the event whose handler is to be extended
 * @param extender Function to extend the existing handler. Will be called second.
 * @param props The props of the component which may contain an original handler.
 *
 * @return An object of the form { event: extendedHandler }.
 */
export declare const useExtendHandler: (event: string, extender: EventHandler<any>, props: any) => {
    [x: string]: any;
};
export declare const useContextActivator: (event?: string, handler?: ((event: any) => void) | undefined) => {
    'data-bl-activator': boolean;
};
/**
 * @private
 *
 * Utility hook to properly memoize a getter function so that the function itself is invariant,
 * but the return value can change. Useful when you want to prevent re-render of components
 * which use the getter every time the return value changes.
 *
 * @param value The current value to be returned by the getter.
 *
 * @return A memoized getter function which will return the current value
 */
export declare const useGetter: <P extends unknown>(value: P) => () => P;
/**
 *
 * Utility hook to detect click outside of the `ref` element and execute a callback.
 * This HOC also adds an Escape button listner and will execute a callback on the `esc` keypress.
 *
 * Usage:
 *
 * ```js
 * useClickOutside(ref, () => {
 *   alert('Clicked outside');
 * });
 * ```
 *
 * @param ref Is a ref to the object we are clicking outside created via useRef() or createRef().
 * @param callback A callback to execute when click outside is detected.
 *
 */
export declare const useClickOutside: (ref: React.MutableRefObject<any>, callback: (e: KeyboardEvent | MouseEvent) => void) => void;
/**
 *
 * Utility hook to sync state to local storage so that it persists through a page refresh.
 * Usage is similar to useState except we pass in a local storage key so that
 * we can default to that value on page load instead of the specified initial value.
 *
 * @usage has the same API of useState

 *FilterWrapper.tsx @param key storage key like localStorage.getItem('key')
 * @param initialValue
 *
 */
export declare const useLocalStorage: (key: string, initialValue: any) => any[];
//# sourceMappingURL=hooks.d.ts.map