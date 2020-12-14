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

import { Plugin } from 'slate-react';
import { isMod } from '../../utils/keyboardEvent';

type Props<P> = {
  toggle: Function,
  key: string,
};

const createKeyboardPlugin = <P extends object> ({
  toggle,
  key,
}: Props<P>) => {
  const plugin: Plugin = {
    // @ts-ignore (I think there is a bug in the onKeyDown type)
    onKeyDown: (event:KeyboardEvent, editor, next) => {
      const { value } = editor;
      if (isMod(event as KeyboardEvent) && event.key === key) {
        return toggle({ editor, value });
      }
      return next();
    },
  };
  return plugin;
};

// eslint-disable-next-line import/prefer-default-export
export { createKeyboardPlugin };
