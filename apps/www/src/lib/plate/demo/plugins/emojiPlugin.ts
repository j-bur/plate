import { RenderAfterEditable } from '@udecode/plate-common';
import { EmojiPlugin } from '@udecode/plate-emoji';

import { EmojiCombobox } from '@/registry/default/ui/emoji-combobox';
import { MyPlatePlugin, MyValue } from '@/types/plate-types';

export const emojiPlugin: Partial<MyPlatePlugin<EmojiPlugin>> = {
  renderAfterEditable: EmojiCombobox as RenderAfterEditable<MyValue>,
};
