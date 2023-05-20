import { deserializeHtml } from '@udecode/plate-core/src/plugins/html-deserializer/utils/deserializeHtml';
import { htmlStringToDOMNode } from '@udecode/plate-core/src/plugins/html-deserializer/utils/htmlStringToDOMNode';
import { createPlateUIEditor } from 'examples/apps/next/src/createPlateUIEditor';
import { serializeHtml } from '../serializeHtml';

it('serializes with edge case where input is non-rich text', () => {
  const input = htmlStringToDOMNode('Some non-rich text here.');
  const output = 'Some non-rich text here.';
  const editor = createPlateUIEditor({ plugins: [] });
  expect(
    serializeHtml(editor, {
      nodes: deserializeHtml(editor, {
        element: input,
      }),
    })
  ).toEqual(output);
});

it('serializes with edge case where input is text element', () => {
  const input = [{ text: 'Test just text.' }];
  const output = 'Test just text.';
  const editor = createPlateUIEditor({ plugins: [] });
  expect(
    serializeHtml(editor, {
      nodes: input,
    })
  ).toEqual(output);
});
