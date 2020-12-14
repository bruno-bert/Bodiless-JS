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
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'enzyme';
import { Plugin } from 'slate-react';
import { Editor, Value, ValueJSON } from 'slate';
import { MARK_TYPE, activeValue } from './fixtures/markState';
import { createMarkPlugin } from '../index';
import markKeyboardShortcut from '../markKeyboardShortcut';

// Mocking the default export
// @see https://github.com/kulshekhar/ts-jest/issues/120#issuecomment-321901971
const markKeyboardShortcutStub = markKeyboardShortcut as jest.Mock;
jest.mock('../markKeyboardShortcut');
markKeyboardShortcutStub.mockImplementation(() => markKeyboardShortcutStub);

const toggleMarkStub = jest.fn();
jest.mock('../markUtils', () => ({
  createToggleMark: jest.fn(() => toggleMarkStub),
}));

describe('createMarkPlugin:', () => {
  const keyboardKey = 'b';
  const MarkComponent: React.FC<React.PropsWithChildren<any>> = ({
    children,
  }) => <i>{children}</i>;
  const MarkPlugin: Plugin = createMarkPlugin(MarkComponent, MARK_TYPE, {
    keyboardKey,
  });
  const valueInstance = Value.fromJSON(activeValue as ValueJSON);
  const editorInstance = new Editor({
    value: valueInstance,
  });

  test('mark is rendered when plugin is injected', () => {
    const text = 'Hello world';
    const props = {
      mark: {
        type: MARK_TYPE,
      },
      attributes: {},
      editor: editorInstance,
      children: text,
    };
    const next = jest.fn();
    // @ts-ignore
    const renderedMark = mount(
      // @ts-ignore Our mock doesn't need all the properties.
      MarkPlugin.renderMark!(props, editorInstance, next),
    );

    expect(renderedMark.text()).toBe(text);
    expect(next.mock.calls.length).toBe(0);
  });

  test('mark is not rendered for different mark type', () => {
    const text = 'Hello world';
    const props = {
      mark: {
        type: 'another-type',
      },
      attributes: {},
      editor: editorInstance,
      children: text,
    };
    const next = jest.fn(() => <div>Another text</div>);
    // @ts-ignore
    const renderedMark = mount(
      // @ts-ignore Mock doesn't need all properties.
      MarkPlugin.renderMark!(props, editorInstance, next),
    );

    expect(renderedMark.text()).toBe('Another text');
    expect(next.mock.calls.length).toBe(1);
  });

  test('mark is triggered by keyboard event', () => {
    const next = jest.fn();

    // KeyboardEvent is a global.
    // eslint-disable-next-line no-undef
    const keyboardEvent = new KeyboardEvent('keydown', {
      key: keyboardKey,
      bubbles: true,
      metaKey: true,
    });
    MarkPlugin.onKeyDown!(keyboardEvent, editorInstance, next);
    expect(markKeyboardShortcutStub.mock.calls.length).toBe(1);
    expect(markKeyboardShortcutStub.mock.calls[0][0]).toBe(keyboardKey);
    expect(markKeyboardShortcutStub.mock.calls[0][1]).toBe(toggleMarkStub);
    expect(markKeyboardShortcutStub.mock.calls[0][2]).toBe(keyboardEvent);
    expect(markKeyboardShortcutStub.mock.calls[0][3]).toBe(editorInstance);
    expect(markKeyboardShortcutStub.mock.calls[0][4]).toBe(next);
  });
});
