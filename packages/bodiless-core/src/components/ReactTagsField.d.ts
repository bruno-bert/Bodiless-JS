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
/// <reference types="react" />
import { ReactTagsProps, Tag as TagType } from 'react-tag-autocomplete';
declare class Tag {
    readonly id: string;
    name: string;
    constructor(name?: string);
}
export declare type ReactTagsFieldProps = {
    allowMultipleTags?: boolean;
} & Omit<ReactTagsProps, 'handleDelete' | 'handleAddition'>;
declare const ReactTagsField: (props: ReactTagsFieldProps) => JSX.Element;
export default ReactTagsField;
export { TagType, Tag as BodilessTag, };
//# sourceMappingURL=ReactTagsField.d.ts.map