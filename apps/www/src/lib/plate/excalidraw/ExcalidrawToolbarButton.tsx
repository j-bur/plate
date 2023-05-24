import React from 'react';
import {
  focusEditor,
  getPluginType,
  someNode,
  useEventPlateId,
  usePlateEditorState,
} from '@udecode/plate-common';
import {
  ELEMENT_EXCALIDRAW,
  insertExcalidraw,
} from '@udecode/plate-excalidraw';

import {
  ToolbarButtonOld,
  ToolbarButtonProps,
} from '@/plate/toolbar/ToolbarButtonOld';

export interface ExcalidrawToolbarButtonProps extends ToolbarButtonProps {}

export function ExcalidrawToolbarButton({ id, ...props }: ToolbarButtonProps) {
  const editor = usePlateEditorState(useEventPlateId(id));

  const type = getPluginType(editor, ELEMENT_EXCALIDRAW);
  const isExcalidraw =
    !!editor?.selection && someNode(editor, { match: { type } });

  return (
    <ToolbarButtonOld
      tooltip={{ content: 'Excalidraw' }}
      active={isExcalidraw}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        insertExcalidraw(editor);
        focusEditor(editor);
      }}
      {...props}
    />
  );
}
