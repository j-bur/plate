/* eslint-disable react-hooks/rules-of-hooks */
/** @jsx jsx */

import { createParagraphPlugin } from '@udecode/plate-paragraph/src/createParagraphPlugin';
import { jsx } from '@udecode/plate-test-utils';
import { createPlateUIEditor } from 'apps/www/src/lib/createPlateUIEditor';
import { htmlElementToElement } from './htmlElementToElement';
import { parseHtmlElement } from './parseHtmlElement';

jsx;

const output = (
  <hp>
    <htext>test</htext>
  </hp>
);

describe('when deserializing p > test', () => {
  it('should be', () => {
    expect(
      htmlElementToElement(
        createPlateUIEditor({
          plugins: [createParagraphPlugin()],
        }),
        parseHtmlElement(`<p>test</p>`)
      )
    ).toEqual(output);
  });
});
