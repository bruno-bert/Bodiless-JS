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
import { Editor as ReactEditor } from 'slate-react';
import { useSlateContext } from './SlateEditorContext';
import { EditorContext } from '../Type';

type Props = {
  className?: string;
  wrapperStyle?: object;
};

const Content: React.FC<Props> = () => {
  const editorContext: EditorContext = useSlateContext();
  return (
    <ReactEditor
      {...editorContext!.editorProps}
      ref={editorContext!.editorRef}
    />
  );
};

export default Content;
