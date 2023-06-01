import React from 'react';
import {
  ELEMENT_IMAGE,
  ListStyleType,
  MARK_BG_COLOR,
  MARK_BOLD,
  MARK_CODE,
  MARK_COLOR,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  usePlateReadOnly,
} from '@udecode/plate';
import { CommentToolbarButton } from './comments/comment-toolbar-button';
import { EmojiDropdownMenu } from './emoji/EmojiDropdownMenu';
import { ColorDropdownMenu } from './font/ColorDropdownMenu';
import { AlignDropdownMenu } from './align-dropdown-menu';
import { IndentListToolbarButton } from './indent-list-toolbar-button';
import { IndentToolbarButton } from './indent-toolbar-button';
import { InsertDropdownMenu } from './insert-dropdown-menu';
import { LinkToolbarButton } from './link-toolbar-button';
import { ModeDropdownMenu } from './mode-dropdown-menu';
import { MoreDropdownMenu } from './more-dropdown-menu';
import { OutdentToolbarButton } from './outdent-toolbar-button';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';

import { Icons, iconVariants } from '@/components/icons';
import { ToolbarSeparator } from '@/components/ui/toolbar';
import { LineHeightDropdownMenu } from '@/plate/aui/line-height-dropdown-menu';
import { MarkToolbarButton } from '@/plate/aui/mark-toolbar-button';
import { MediaToolbarButton } from '@/plate/aui/media-toolbar-button';
import { TableDropdownMenu } from '@/plate/aui/table-dropdown-menu';

export function HeadingToolbarButtons() {
  const readOnly = usePlateReadOnly();

  return (
    <>
      <div className="flex gap-1">
        {!readOnly && (
          <>
            <InsertDropdownMenu />

            <TurnIntoDropdownMenu />

            <ToolbarSeparator />

            <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
              <Icons.bold />
            </MarkToolbarButton>
            <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
              <Icons.italic />
            </MarkToolbarButton>
            <MarkToolbarButton
              tooltip="Underline (⌘+U)"
              nodeType={MARK_UNDERLINE}
            >
              <Icons.underline />
            </MarkToolbarButton>
            <MarkToolbarButton
              tooltip="Strikethrough (⌘+⇧+M)"
              nodeType={MARK_STRIKETHROUGH}
            >
              <Icons.strikethrough />
            </MarkToolbarButton>
            <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>
              <Icons.code />
            </MarkToolbarButton>

            <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
              <Icons.color className={iconVariants({ variant: 'toolbar' })} />
            </ColorDropdownMenu>
            <ColorDropdownMenu
              nodeType={MARK_BG_COLOR}
              tooltip="Highlight Color"
            >
              <Icons.bg className={iconVariants({ variant: 'toolbar' })} />
            </ColorDropdownMenu>

            <ToolbarSeparator />

            <AlignDropdownMenu />

            <LineHeightDropdownMenu />

            <IndentListToolbarButton nodeType={ListStyleType.Disc} />
            <IndentListToolbarButton nodeType={ListStyleType.Decimal} />

            <OutdentToolbarButton />
            <IndentToolbarButton />

            <ToolbarSeparator />

            <LinkToolbarButton />

            <MediaToolbarButton nodeType={ELEMENT_IMAGE} />

            <TableDropdownMenu />
            <EmojiDropdownMenu />
            <MoreDropdownMenu />
          </>
        )}
      </div>

      <div className="flex gap-1">
        <CommentToolbarButton />
        <ModeDropdownMenu />
      </div>
    </>
  );
}
