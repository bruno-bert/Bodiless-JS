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
import { ReactNode } from 'react';
import { FormApi, FormState } from 'informed';
import type { ContextMenuFormProps } from './Types/ContextMenuTypes';
export declare type Options<D> = {
    submitValues?: (componentData: D) => boolean | void;
    onClose?: (componentData: D) => boolean | void;
    initialValues?: D;
    hasSubmit?: ((componentData: D) => boolean) | boolean;
};
export declare type FormBodyProps<D> = ContextMenuFormProps & Options<D> & {
    formApi: FormApi<D>;
    formState: FormState<D>;
};
export declare type FormBodyRenderer<D> = (props: FormBodyProps<D>) => ReactNode;
export declare type ContextMenuPropsType<D> = ContextMenuFormProps & Options<D> & {
    children: FormBodyRenderer<D> | ReactNode;
};
export declare type FormChromeProps = {
    hasSubmit: boolean;
} & ContextMenuFormProps;
export declare const FormChrome: any;
export declare const ContextMenuForm: <D extends object>(props: ContextMenuPropsType<D>) => JSX.Element;
export declare const contextMenuForm: <D extends object>(options?: Options<D>) => (renderForm?: FormBodyRenderer<D> | undefined) => (props: Omit<ContextMenuFormProps, 'children'>) => JSX.Element;
declare type HookOptions<D> = Options<D> & {
    renderForm?: FormBodyRenderer<D>;
};
declare const useContextMenuForm: <D extends object>(options?: HookOptions<D>) => (props: Omit<ContextMenuFormProps, 'children'>) => JSX.Element;
export default useContextMenuForm;
//# sourceMappingURL=contextMenuForm.d.ts.map