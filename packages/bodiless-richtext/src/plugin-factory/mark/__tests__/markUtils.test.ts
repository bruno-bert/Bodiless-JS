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
import {
  activeValue,
  inactiveValueWithMark,
  inactiveValueWithoutMark,
  MARK_TYPE,
} from './fixtures/markState';

describe('createIsActive: ', () => {
  const isActive = createIsActive(MARK_TYPE);
  test('detects positive selection on the mark returns true', () => {
    expect(isActive(Value.fromJSON(activeValue as ValueJSON))).toBeTruthy();
  });
  test("doesn't detect mark on the selection outside of mark ", () => {
    expect(
      isActive(Value.fromJSON(inactiveValueWithMark as ValueJSON)),
    ).toBeFalsy();
  });
  test("doesn't detect inactive mark", () => {
    expect(
      isActive(Value.fromJSON(inactiveValueWithoutMark as ValueJSON)),
    ).toBeFalsy();
  });
});

test(
  'createIsActive HOF returns a function that checks whether '
    + 'marktype is active for current value',
  () => {},
);

test('createToggleMark HOF returns a function that toggles given mark type', () => {
  const toggleMark = createToggleMark(MARK_TYPE);
  const isActive = createIsActive(MARK_TYPE);
  const valueInstance = Value.fromJSON(activeValue as ValueJSON);
  const EditorInstance = new Editor({
    value: valueInstance,
  });
  toggleMark({
    editor: EditorInstance,
  });
  expect(isActive(EditorInstance.value)).toBeFalsy();

  toggleMark({
    editor: EditorInstance,
  });
  expect(isActive(EditorInstance.value)).toBeTruthy();
});
