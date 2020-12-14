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

import { Selection } from 'slate';

export const BLOCK_TYPE = 'custom_block';

export const activeValue = {
  document: {
    nodes: [
      {
        object: 'block',
        type: BLOCK_TYPE,
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'rich text',
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
  selection: new Selection({
    object: 'selection',
    anchor: {
      object: 'point',
      offset: 3,
      path: [0, 0],
    },
    focus: {
      object: 'point',
      offset: 3,
      path: [0, 0],
    },
    isFocused: true,
    marks: null,
  }),
};

export const inactiveValueWithBlock = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'rich text',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: BLOCK_TYPE,
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'another rich text',
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
  selection: new Selection({
    object: 'selection',
    anchor: {
      object: 'point',
      offset: 7,
      path: [0, 0],
    },
    focus: {
      object: 'point',
      offset: 7,
      path: [0, 0],
    },
    isFocused: true,
    marks: null,
  }),
};

export const inactiveValueWithoutBlock = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'rich text',
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },

  selection: new Selection({
    object: 'selection',
    anchor: {
      object: 'point',
      offset: 3,
      path: [0, 0],
    },
    focus: {
      object: 'point',
      offset: 3,
      path: [0, 0],
    },
    isFocused: true,
    marks: null,
  }),
};
