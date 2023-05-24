import React from 'react';
import { Alignment, KEY_ALIGN, setAlign } from '@udecode/plate-alignment';
import {
  focusEditor,
  isCollapsed,
  someNode,
  useEventPlateId,
  usePlateEditorState,
} from '@udecode/plate-common';

import {
  ToolbarButtonOld,
  ToolbarButtonProps,
} from '@/plate/toolbar/ToolbarButtonOld';

export interface AlignToolbarButtonProps extends ToolbarButtonProps {
  value: Alignment;
  pluginKey?: string;
}

export function AlignToolbarButton({
  id,
  value,
  pluginKey = KEY_ALIGN,
  ...props
}: AlignToolbarButtonProps) {
  const editor = usePlateEditorState(useEventPlateId(id));

  const active =
    isCollapsed(editor?.selection) &&
    someNode(editor!, { match: { [pluginKey]: value } });

  return (
    <ToolbarButtonOld
      active={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        setAlign(editor, {
          value,
          key: pluginKey,
        });

        focusEditor(editor);
      }}
      {...props}
    />
  );
}
