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

import { Editor as CoreEditor, Editor } from 'slate';
import { isMod } from '../../utils/keyboardEvent';
import { ToggleProps } from '../../Type';

type MarkKeyboardShortcut = (
  key: string,
  toggleMark: (options: ToggleProps) => Editor,
  event: KeyboardEvent,
  editor: CoreEditor,
  next: () => any,
) => any;

const markKeyboardShortcut: MarkKeyboardShortcut = (
  key,
  toggleMark,
  event,
  editor,
  next,
) => {
  if (isMod(event) && event.key === key) {
    return toggleMark({ editor, value: editor.value });
  }
  return next();
};

export default markKeyboardShortcut;
