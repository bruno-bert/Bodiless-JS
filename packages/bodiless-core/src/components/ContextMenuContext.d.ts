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
import React, { FC } from 'react';
import type { ContextMenuUI, ContextMenuFormProps } from '../Types/ContextMenuTypes';
declare type ContextType = {
    setRenderForm?: React.Dispatch<React.SetStateAction<((props: ContextMenuFormProps) => JSX.Element) | undefined>>;
};
declare type ContextUIType = {
    ui?: ContextMenuUI;
};
declare const getUI: (ui?: ContextMenuUI) => {
    Icon: string | React.ComponentClass<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLSpanElement> & {
        isActive?: boolean | undefined;
    }, any> | React.FunctionComponent<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLSpanElement> & {
        isActive?: boolean | undefined;
    }>;
    Toolbar: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ToolbarButton: string | React.ComponentClass<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }, any> | React.FunctionComponent<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }>;
    HorizontalToolbarButton: string | React.ComponentClass<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }, any> | React.FunctionComponent<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }>;
    ToolbarButtonLabel: string | React.ComponentClass<React.HTMLProps<HTMLSpanElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLSpanElement>>;
    FormWrapper: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ToolbarDivider: string | React.ComponentClass<React.HTMLProps<HTMLHRElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLHRElement>>;
    ComponentFormFieldWrapper: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormTitle: string | React.ComponentClass<React.HTMLProps<HTMLHeadingElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLHeadingElement>>;
    ComponentFormLabel: string | React.ComponentClass<React.HTMLProps<HTMLLabelElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLLabelElement>>;
    ComponentFormDescription: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormCloseButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormSubmitButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormUnwrapButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormText: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormTextArea: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormRadioGroup: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormFieldTitle: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormRadio: React.ComponentType<import("informed").ChildFieldProps<any, any>>;
    ComponentFormCheckBox: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormSelect: React.ComponentType<import("informed").SelectFieldProps<any, any>>;
    ComponentFormOption: React.ComponentType<import("informed").ChildFieldProps<any, any>>;
    ComponentFormError: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormWarning: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormLink: string | React.ComponentClass<React.HTMLProps<HTMLAnchorElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLAnchorElement>>;
    Form: string | React.ComponentClass<React.HTMLProps<HTMLFormElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLFormElement>>;
    Tooltip: React.ComponentType<Readonly<import("rc-tooltip").RCTooltip.Props> & Readonly<{
        children?: React.ReactNode;
    }>>;
    ReactTags: React.ComponentType<import("./ReactTagsField").ReactTagsFieldProps>;
    ComponentFormList: string | React.ComponentClass<React.HTMLProps<HTMLUListElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLUListElement>>;
    ComponentFormListItem: string | React.ComponentClass<React.HTMLProps<HTMLLIElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLLIElement>>;
    ContextSubMenu: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ContextMenuGroup: React.ComponentType<import("../Types/ContextMenuTypes").IContextMenuItemProps>;
};
declare const useContextMenuContext: () => ContextType;
declare const useMenuOptionUI: () => {
    Icon: string | React.ComponentClass<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLSpanElement> & {
        isActive?: boolean | undefined;
    }, any> | React.FunctionComponent<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLSpanElement> & {
        isActive?: boolean | undefined;
    }>;
    Toolbar: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ToolbarButton: string | React.ComponentClass<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }, any> | React.FunctionComponent<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }>;
    HorizontalToolbarButton: string | React.ComponentClass<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }, any> | React.FunctionComponent<import("../../../fclasses/src").StylableProps & React.HTMLProps<HTMLDivElement> & {
        isActive?: boolean | undefined;
        isFirst?: boolean | undefined;
        isDisabled?: boolean | undefined;
    }>;
    ToolbarButtonLabel: string | React.ComponentClass<React.HTMLProps<HTMLSpanElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLSpanElement>>;
    FormWrapper: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ToolbarDivider: string | React.ComponentClass<React.HTMLProps<HTMLHRElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLHRElement>>;
    ComponentFormFieldWrapper: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormTitle: string | React.ComponentClass<React.HTMLProps<HTMLHeadingElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLHeadingElement>>;
    ComponentFormLabel: string | React.ComponentClass<React.HTMLProps<HTMLLabelElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLLabelElement>>;
    ComponentFormDescription: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormCloseButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormSubmitButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormUnwrapButton: string | React.ComponentClass<React.HTMLProps<HTMLButtonElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLButtonElement>>;
    ComponentFormText: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormTextArea: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormRadioGroup: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormFieldTitle: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormRadio: React.ComponentType<import("informed").ChildFieldProps<any, any>>;
    ComponentFormCheckBox: React.ComponentType<import("informed").FieldProps<any, any>>;
    ComponentFormSelect: React.ComponentType<import("informed").SelectFieldProps<any, any>>;
    ComponentFormOption: React.ComponentType<import("informed").ChildFieldProps<any, any>>;
    ComponentFormError: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormWarning: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ComponentFormLink: string | React.ComponentClass<React.HTMLProps<HTMLAnchorElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLAnchorElement>>;
    Form: string | React.ComponentClass<React.HTMLProps<HTMLFormElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLFormElement>>;
    Tooltip: React.ComponentType<Readonly<import("rc-tooltip").RCTooltip.Props> & Readonly<{
        children?: React.ReactNode;
    }>>;
    ReactTags: React.ComponentType<import("./ReactTagsField").ReactTagsFieldProps>;
    ComponentFormList: string | React.ComponentClass<React.HTMLProps<HTMLUListElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLUListElement>>;
    ComponentFormListItem: string | React.ComponentClass<React.HTMLProps<HTMLLIElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLLIElement>>;
    ContextSubMenu: string | React.ComponentClass<React.HTMLProps<HTMLDivElement>, any> | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
    ContextMenuGroup: React.ComponentType<import("../Types/ContextMenuTypes").IContextMenuItemProps>;
};
declare const ContextMenuProvider: FC<ContextType & ContextUIType>;
export default ContextMenuProvider;
export { useContextMenuContext, useMenuOptionUI, getUI, };
//# sourceMappingURL=ContextMenuContext.d.ts.map