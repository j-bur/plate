/** @jsx jsx */

import { PlateEditor } from '@udecode/plate-common';
import { jsx } from '@udecode/plate-test-utils';

import { createAlignPlugin } from '@/nodes/alignment/src/createAlignPlugin';
import { setAlign } from '@/nodes/alignment/src/transforms/setAlign';
import { createPlateUIEditor } from '@/plate/createPlateUIEditor';

jsx;

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any as PlateEditor;

const output = (
  <editor>
    <hp align="center">test</hp>
  </editor>
) as any as PlateEditor;

it('should align center', () => {
  const editor = createPlateUIEditor({
    editor: input,
    plugins: [createAlignPlugin()],
  });

  setAlign(editor, { value: 'center' });

  expect(editor.children).toEqual(output.children);
});
