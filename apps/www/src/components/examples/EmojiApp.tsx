import React from 'react';
import {
  createComboboxPlugin,
  createEmojiPlugin,
  KEY_EMOJI,
  Plate,
  PlateProvider,
} from '@udecode/plate';

import { Icons } from '@/components/icons';
import { editableProps } from '@/plate/demo/editableProps';
import { createMyPlugins, MyValue } from '@/plate/demo/plate.types';
import { plateUI } from '@/plate/demo/plateUI';
import { basicNodesPlugins } from '@/plate/demo/plugins/basicNodesPlugins';
import { emojiPlugin } from '@/plate/demo/plugins/emojiPlugin';
import { emojiValue } from '@/plate/demo/values/emojiValue';
import { EmojiDropdownMenu } from '@/plate/emoji/EmojiDropdownMenu';
import { HeadingToolbar } from '@/plate/toolbar/HeadingToolbar';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createComboboxPlugin(),
    createEmojiPlugin(emojiPlugin),
  ],
  {
    components: plateUI,
  }
);

export default function EmojiApp() {
  return (
    <PlateProvider<MyValue>
      plugins={plugins}
      initialValue={emojiValue}
      onChange={(e) => console.info(e)}
    >
      <HeadingToolbar>
        <EmojiDropdownMenu pluginKey={KEY_EMOJI}>
          <Icons.emoji />
        </EmojiDropdownMenu>
      </HeadingToolbar>

      <Plate<MyValue> editableProps={editableProps} />
    </PlateProvider>
  );
}
