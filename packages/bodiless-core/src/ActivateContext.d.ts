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
import React from 'react';
declare type ActivateOnEffectState = {
    id: string;
    setId: (id: string) => void;
};
export declare const ActivateOnEffectProvider: React.FunctionComponent;
/**
 * WithActivateContext is a HOC that wraps the Component in a ActivateContextProvider
 * @param Component The component to wrap
 */
export declare const withActivateOnEffect: <P extends Object>(Component: React.FunctionComponent<P>) => (props: P) => JSX.Element;
/**
 * useActivateContext is a hook that returns the ActivateContext
 */
export declare const useActivateOnEffect: () => ActivateOnEffectState;
/**
 * useActivateOnEffect is a hook that will check if a id is stored in the ActivateContext
 * if it is it will run the iseContextActivator hook
 * @param uuid id of the component to check
 */
export declare const useActivateOnEffectActivator: (uuid: string) => void;
export {};
//# sourceMappingURL=ActivateContext.d.ts.map