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
import React, { ComponentType as CT, ComponentType } from 'react';
import { FormBodyRenderer } from './contextMenuForm';
import type { MenuOptionsDefinition } from './Types/PageContextProviderTypes';
/**
 * A collection of form fields (with initial values and submit handler) which can be rendered
 * as part of a compound form.
 */
export declare type Snippet<D> = {
    /**
     * A unique identifier for this snippet
     */
    id: string;
    /**
     * The function which will render the actual form fields
     */
    render: FormBodyRenderer<D>;
    /**
     * The initial values for each form field. Note that you
     * *must* include a key for each field in the form.
     */
    initialValues?: any;
    /**
     * The submit handler.  Will be invoked with form values
     * whose field names match the keys of the specified initialValues.
     */
    submitValues?: (values: any) => void;
};
/**
 * A collection of compound form Design Components.
 */
export declare type CompoundFormComponents = {
    Wrapper: ComponentType<any>;
};
/**
 * HOC to create a menu option which will display a "compound form". Children of this
 * component can contribute "snippets" to the form. Each snippet consists of
 * - a render function (to render the form fields)
 * - initial values to populate the fields
 * - a submit handler which will be passed all submitted values from the form.
 * @param option A context menu option (minus the handler).
 */
declare const withCompoundForm: <P extends object>(options: MenuOptionsDefinition<P>) => (Component: React.ComponentType<P>) => React.ComponentType<import("../../fclasses/src").DesignableProps<CompoundFormComponents> & P>;
export default withCompoundForm;
/**
 * Hook to register a form snippet which will be rendered as part of a compound form. Should
 * be invoked within a component wrapped in `withCompoundForm`.
 *
 * @param snippet The snippet to add to the form.
 */
export declare const useRegisterSnippet: <D extends object>(snippet: Snippet<D>) => void;
//# sourceMappingURL=withCompoundForm.d.ts.map