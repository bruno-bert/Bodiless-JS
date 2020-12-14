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
/// <reference types="react" />
import { FormBodyProps as ContextMenuFormBodyProps } from './contextMenuForm';
import type { EditButtonProps, EditButtonOptions } from './Types/EditButtonTypes';
import { TMenuOption } from './Types/ContextMenuTypes';
declare type UseEditFormProps<P, D> = P & EditButtonProps<D> & Pick<EditButtonOptions<P, D>, 'renderForm' | 'initialValueHandler' | 'submitValueHandler'>;
/**
 * Given a base option, creates a pair of menu options including
 * the base option and a group which contains it.
 *
 * @param baseOption The option for which to create the group.
 *
 * @return The base option and a group which contains it.
 */
export declare const createMenuOptionGroup: (baseOption: Omit<EditButtonOptions<any, any>, 'renderForm'>) => TMenuOption[];
/**
 * Generates required props to pass to `ContextMenuForm`
 * using the normal bodiless data handlers. For example:
 * ```
 * const useMyContextMenuForm = props => (
 *   const render = () => (
 *     <ContextMenuForm {..useEditFormProps(props)}>
 *       // Custom form components
 *     </ContextMenuForm>
 *   );
 *   // use this render to provide a menu button.
 * );
 * ```
 * Alternatively you can pass an additional renderForm callback
 * to generate props suitable for `useEditForm`:
 * ```
 * const WithMyContextMenuForm = props => (
 *   const renderForm = () => // Custom form components
 *   const render = useContextMenuForm(useEditFormProps({ ...props, renderForm }));
 *   // use this render to provide a menu button.
 * };
 * ```
 *
 * @param props The props passed to the component providing the form.
 *
 * @return Props suitable for passing to ContextMenuForm.
 */
export declare const useEditFormProps: <P extends object, D extends object>(props: UseEditFormProps<P, D>) => {
    initialValues: D;
    submitValues: (...args: any[]) => any;
    renderForm: (p: ContextMenuFormBodyProps<D>) => import("react").ReactNode;
} | {
    initialValues: D;
    submitValues: (...args: any[]) => any;
    renderForm?: undefined;
};
/**
 * Uses the provided options to create an HOC which adds an edit button provider
 * to the wrapped component.
 *
 * @param options The options defining the edit button.
 *
 * @return An HOC which will add an edit button for the wrapped component.
 */
declare const withEditButton: <P extends object, D extends object>(options: EditButtonOptions<P, D> | ((props: P) => EditButtonOptions<P, D>)) => (...args: any[]) => any;
export default withEditButton;
//# sourceMappingURL=withEditButton.d.ts.map