import React from 'react';
import {
  findNodePath,
  focusEditor,
  removeNodes,
  TElement,
  useEditorRef,
} from '@udecode/plate-common';
import { Button, ButtonProps } from './PlateButton';

import { DeleteIcon } from '@/plate/icon/DeleteIcon';

export function RemoveNodeButton({
  element,
  children,
  ...props
}: ButtonProps & { element: TElement }) {
  const editor = useEditorRef();

  return (
    <Button
      onClick={() => {
        const path = findNodePath(editor, element);

        removeNodes(editor, { at: path });

        focusEditor(editor, editor.selection!);
      }}
      {...props}
    >
      <DeleteIcon />
      {children}
    </Button>
  );
}
