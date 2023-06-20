/** @jsx jsx */

import { createPlateEditor, PlateEditor } from '@udecode/plate-common';
import { jsx } from '@udecode/plate-test-utils';

import { createAlignPlugin } from '@/nodes/alignment/src/createAlignPlugin';
import { setAlign } from '@/nodes/alignment/src/transforms/setAlign';

jsx;

describe('when type (h1) is not in types', () => {
  const input = (
    <editor>
      <hh1>
        test
        <cursor />
      </hh1>
    </editor>
  ) as any as PlateEditor;

  const output = (
    <editor>
      <hh1>test</hh1>
    </editor>
  ) as any as PlateEditor;

  it('should not align', () => {
    const editor = createPlateEditor({
      editor: input,
      plugins: [createAlignPlugin()],
    });

    setAlign(editor, { value: 'center' });

    expect(input.children).toEqual(output.children);
  });
});
