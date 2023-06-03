import {
  findNodePath,
  setNodes,
  usePlateEditorRef,
} from '@udecode/plate-common';
import { TTodoListItemElement } from '@udecode/plate-list';
import { useReadOnly } from 'slate-react';

export const useTodoListElementState = ({
  element,
}: {
  element: TTodoListItemElement;
}) => {
  const editor = usePlateEditorRef();
  const { checked } = element;
  const readOnly = useReadOnly();

  return {
    checked,
    readOnly,
    element,
    editor,
  };
};

export const useTodoListElement = (
  state: ReturnType<typeof useTodoListElementState>
) => {
  const { checked, readOnly, element } = state;
  const editor = usePlateEditorRef();

  return {
    inputProps: {
      checked: !!checked,
      onChange: (e) => {
        if (readOnly) return;
        const path = findNodePath(editor, element);
        if (!path) return;

        setNodes<TTodoListItemElement>(
          editor,
          { checked: e.target.checked },
          {
            at: path,
          }
        );
      },
    },
  };
};
