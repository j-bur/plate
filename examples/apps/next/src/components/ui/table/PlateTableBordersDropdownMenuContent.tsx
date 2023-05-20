import React, { SVGProps } from 'react';
import { DropdownMenu } from '@udecode/plate-floating';
import {
  BorderBottomIcon,
  BorderLeftIcon,
  BorderNoneIcon,
  BorderOuterIcon,
  BorderRightIcon,
  BorderTopIcon,
  useTableBordersDropdownMenuContentState,
} from '@udecode/plate-table';
import { cn } from '@udecode/plate-tailwind';
import { Button } from '@udecode/plate-ui-button';
import { floatingStyles } from '@udecode/plate-ui-toolbar';

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function Check({ checked }: { checked?: boolean }) {
  return checked ? (
    <CheckIcon className="block" />
  ) : (
    <div className="h-4 w-4" />
  );
}

export function PlateTableBordersDropdownMenuContent() {
  const {
    getOnSelectTableBorder,
    hasOuterBorders,
    hasBottomBorder,
    hasLeftBorder,
    hasNoBorders,
    hasRightBorder,
    hasTopBorder,
  } = useTableBordersDropdownMenuContentState();

  return (
    <DropdownMenu.Content
      className={cn(
        floatingStyles.rootVariants(),
        'min-w-[220px] py-1.5 text-neutral-900'
      )}
      side="right"
      align="start"
      sideOffset={8}
    >
      <div className="px-1">
        <DropdownMenu.Item onSelect={getOnSelectTableBorder('bottom')}>
          <Button variant="menu">
            <Check checked={hasBottomBorder} />
            <BorderBottomIcon />
            <div>Bottom Border</div>
          </Button>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={getOnSelectTableBorder('top')}>
          <Button variant="menu">
            <Check checked={hasTopBorder} />
            <BorderTopIcon />
            <div>Top Border</div>
          </Button>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={getOnSelectTableBorder('left')}>
          <Button variant="menu">
            <Check checked={hasLeftBorder} />
            <BorderLeftIcon />
            <div>Left Border</div>
          </Button>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={getOnSelectTableBorder('right')}>
          <Button variant="menu">
            <Check checked={hasRightBorder} />
            <BorderRightIcon />
            <div>Right Border</div>
          </Button>
        </DropdownMenu.Item>
      </div>

      <div className="my-1.5 h-px w-full bg-gray-200" />

      <div className="px-1">
        <DropdownMenu.Item onSelect={getOnSelectTableBorder('none')}>
          <Button variant="menu">
            <Check checked={hasNoBorders} />
            <BorderNoneIcon />
            <div>No Border</div>
          </Button>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={getOnSelectTableBorder('outer')}>
          <Button variant="menu">
            <Check checked={hasOuterBorders} />
            <BorderOuterIcon />
            <div>Outside Borders</div>
          </Button>
        </DropdownMenu.Item>
      </div>
    </DropdownMenu.Content>
  );
}
