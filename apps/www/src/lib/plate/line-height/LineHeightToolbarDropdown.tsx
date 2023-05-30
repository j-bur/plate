import React from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import {
  getPluginInjectProps,
  isBlock,
  KEY_LINE_HEIGHT,
  TElement,
} from '@udecode/plate';
import {
  findNode,
  focusEditor,
  isCollapsed,
  useEventPlateId,
} from '@udecode/plate-common';
import { setLineHeight } from '@udecode/plate-line-height';

import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  useOpenState,
} from '@/components/ui/dropdown-menu';
import { ToolbarButton } from '@/components/ui/toolbar-button';
import { useMyPlateEditorState } from '@/plate/demo/plate.types';

export function LineHeightToolbarDropdown(props: DropdownMenuProps) {
  const editor = useMyPlateEditorState(useEventPlateId());

  const { validNodeValues: values = [], defaultNodeValue } =
    getPluginInjectProps(editor, KEY_LINE_HEIGHT);

  let value: string = defaultNodeValue;
  if (isCollapsed(editor?.selection)) {
    const entry = findNode<TElement>(editor!, {
      match: (n) => isBlock(editor, n),
    });
    if (entry) {
      value =
        values.find((item) => item === entry[0][KEY_LINE_HEIGHT]) ??
        defaultNodeValue;
    }
  }

  const openState = useOpenState();

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip="Line height"
          isDropdown
        >
          <Icons.lineHeight />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-0">
        <DropdownMenuRadioGroup
          className="flex flex-col gap-0.5"
          value={value}
          onValueChange={(newValue) => {
            setLineHeight(editor, {
              value: Number(newValue),
            });
            focusEditor(editor);
          }}
        >
          {values.map((_value) => (
            <DropdownMenuRadioItem
              key={_value}
              value={_value}
              className="min-w-[180px]"
            >
              {_value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
