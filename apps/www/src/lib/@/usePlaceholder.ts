import {
  findNodePath,
  isCollapsed,
  isElementEmpty,
  PlateElementProps,
  queryNode,
  QueryNodeOptions,
  usePlateEditorState,
} from '@udecode/plate-common';
import { useFocused, useSelected } from 'slate-react';

export interface PlaceholderProps extends PlateElementProps {
  placeholder: string;
  hideOnBlur?: boolean;
  query?: QueryNodeOptions;
}

export const usePlaceholderState = ({
  hideOnBlur = true,
  query,
  element,
}: PlaceholderProps) => {
  const focused = useFocused();
  const selected = useSelected();
  const editor = usePlateEditorState();

  const isEmptyBlock = isElementEmpty(editor, element);

  const enabled =
    isEmptyBlock &&
    (!query || queryNode([element, findNodePath(editor, element)!], query)) &&
    (!hideOnBlur ||
      (isCollapsed(editor.selection) && hideOnBlur && focused && selected));

  return {
    enabled,
  };
};
