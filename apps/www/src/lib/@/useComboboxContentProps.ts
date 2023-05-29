import { useCallback, useEffect } from 'react';
import {
  comboboxActions,
  ComboboxControls,
  Data,
  NoData,
  useActiveComboboxStore,
  useComboboxSelectors,
} from '@udecode/plate-combobox';
import { HTMLPropsAs, usePlateEditorState } from '@udecode/plate-common';
import {
  flip,
  getRangeBoundingClientRect,
  offset,
  shift,
  useVirtualFloating,
} from '@udecode/plate-floating';
import { ComboboxProps } from './ComboboxProps';

export type ComboboxContentProps<TData extends Data = NoData> = Omit<
  ComboboxProps<TData>,
  | 'id'
  | 'trigger'
  | 'searchPattern'
  | 'onSelectItem'
  | 'controlled'
  | 'maxSuggestions'
  | 'filter'
  | 'sort'
> & { combobox: ComboboxControls };

export type ComboboxContentRootProps<TData extends Data = NoData> =
  HTMLPropsAs<'ul'> &
    ComboboxContentProps<TData> & { combobox: ComboboxControls };

export const useComboboxContentProps = <TData extends Data = NoData>({
  items,
  combobox,
  ...props
}: ComboboxContentRootProps<TData>) => {
  const targetRange = useComboboxSelectors.targetRange();
  const floatingOptions = useComboboxSelectors.floatingOptions();
  const editor = usePlateEditorState();
  const activeComboboxStore = useActiveComboboxStore()!;
  const text = useComboboxSelectors.text() ?? '';
  const storeItems = useComboboxSelectors.items();
  const filter = activeComboboxStore.use.filter?.();
  const sort = activeComboboxStore.use.sort?.();
  const maxSuggestions =
    activeComboboxStore.use.maxSuggestions?.() ?? storeItems.length;

  // Update items
  useEffect(() => {
    items && comboboxActions.items(items);
  }, [items]);

  // Filter items
  useEffect(() => {
    comboboxActions.filteredItems(
      storeItems
        .filter(
          filter
            ? filter(text)
            : (value) => value.text.toLowerCase().startsWith(text.toLowerCase())
        )
        .sort(sort?.(text))
        .slice(0, maxSuggestions)
    );
  }, [filter, sort, storeItems, maxSuggestions, text]);

  // Get target range rect
  const getBoundingClientRect = useCallback(
    () => getRangeBoundingClientRect(editor, targetRange),
    [editor, targetRange]
  );

  // Update popper position
  const { style, refs } = useVirtualFloating({
    placement: 'bottom-start',
    getBoundingClientRect,
    middleware: [offset(4), shift(), flip()],
    ...floatingOptions,
  });

  const menuProps = combobox
    ? combobox.getMenuProps({}, { suppressRefError: true })
    : { ref: null };

  return {
    ...menuProps,
    ...props,
    ref: refs.setFloating,
    style: { ...style, ...props.style },
  };
};
