import { EmojiPlugin, RenderAfterEditable } from '@udecode/plate';

import { EmojiCombobox } from '@/plate/bcomponents/emoji/EmojiCombobox';
import { MyPlatePlugin, MyValue } from '@/types/plate.types';

export const emojiPlugin: Partial<MyPlatePlugin<EmojiPlugin>> = {
  renderAfterEditable: EmojiCombobox as RenderAfterEditable<MyValue>,
};
