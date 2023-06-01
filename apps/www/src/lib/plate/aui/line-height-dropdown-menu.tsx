import React from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

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
import { useLineHeightDropdownMenuRadioItemProps } from '@/lib/@/useLineHeightDropdownMenuRadioItemProps';
import { useLineHeightDropdownMenuState } from '@/lib/@/useLineHeightDropdownMenuState';

export function LineHeightDropdownMenu({ ...props }: DropdownMenuProps) {
  const openState = useOpenState();
  const { values } = useLineHeightDropdownMenuState();
  const lineHeightDropdownMenuRadioItemProps =
    useLineHeightDropdownMenuRadioItemProps();

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
          {...lineHeightDropdownMenuRadioItemProps}
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
