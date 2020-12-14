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

import { Value, ValueJSON, Editor } from 'slate';
import { createIsActive, createToggleMark } from '../markUtils';
import { activeValue, MARK_TYPE } from './fixtures/markState';
import markKeyboardShortcut from '../markKeyboardShortcut';

describe('blockKeyboardShortcut:', () => {
  const key = 'b';
  const anotherKey = 'w';
  const toggleMark = createToggleMark(MARK_TYPE);
  const isActive = createIsActive(MARK_TYPE);
  const keyboardEvent = new KeyboardEvent('keydown', {
    key,
    bubbles: true,
    metaKey: true,
  });
  const anotherKeyboardEvent = new KeyboardEvent('keydown', {
    key: anotherKey,
    bubbles: true,
    metaKey: true,
  });
  let valueInstance = Value.fromJSON(activeValue as ValueJSON);
  let EditorInstance = new Editor({
    value: valueInstance,
  });
  let next = jest.fn();

  beforeEach(() => {
    // clean editor and value states
    valueInstance = Value.fromJSON(activeValue as ValueJSON);
    EditorInstance = new Editor({
      value: valueInstance,
    });
    next = jest.fn();
  });

  test('triggers the mark upon keyboardEvent', () => {
    markKeyboardShortcut(key, toggleMark, keyboardEvent, EditorInstance, next);

    expect(isActive(EditorInstance.value)).toBeFalsy();

    markKeyboardShortcut(key, toggleMark, keyboardEvent, EditorInstance, next);

    expect(isActive(EditorInstance.value)).toBeTruthy();
  });

  test('does not trigger the mark on keyboardEvent with different key', () => {
    markKeyboardShortcut(
      key,
      toggleMark,
      anotherKeyboardEvent,
      EditorInstance,
      next,
    );
    expect(isActive(EditorInstance.value)).toBeTruthy();
    // check if next plugin callback is called
    expect(next.mock.calls.length).toBe(1);
  });
});
