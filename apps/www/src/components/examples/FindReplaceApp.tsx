import React, { useMemo, useState } from 'react';
import { createFindReplacePlugin, Plate } from '@udecode/plate';

import { Icons } from '@/components/icons';
import { HeadingToolbar } from '@/plate/aui/heading-toolbar';
import { editableProps } from '@/plate/demo/editableProps';
import { plateUI } from '@/plate/demo/plateUI';
import { basicNodesPlugins } from '@/plate/demo/plugins/basicNodesPlugins';
import { findReplaceValue } from '@/plate/demo/values/findReplaceValue';
import { createMyPlugins, MyValue } from '@/types/plate.types';

export interface SearchHighlightToolbarProps {
  icon: any;
  setSearch: any;
}

export function SearchHighlightToolbar({
  icon: Icon,
  setSearch,
}: SearchHighlightToolbarProps) {
  return (
    <HeadingToolbar className="h-[38px]">
      <div
        style={{
          position: 'relative',
          paddingBottom: '10px',
          marginBottom: '10px',
        }}
      >
        <Icon
          size={18}
          style={{
            position: 'absolute',
            top: '0.5em',
            left: '0.5em',
            color: '#ccc',
          }}
        />
        <input
          data-testid="ToolbarSearchHighlightInput"
          type="search"
          placeholder="Search the text..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            boxSizing: 'border-box',
            fontSize: '0.85em',
            width: '100%',
            padding: '0.5em',
            paddingLeft: '2em',
            border: '2px solid #ddd',
            background: '#fafafa',
          }}
        />
      </div>
    </HeadingToolbar>
  );
}

export default function FindReplaceApp() {
  const [search, setSearch] = useState('');

  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          ...basicNodesPlugins,
          createFindReplacePlugin({ options: { search } }),
        ],
        {
          components: plateUI,
        }
      ),
    [search]
  );

  return (
    <>
      <SearchHighlightToolbar icon={Icons.search} setSearch={setSearch} />

      <Plate<MyValue>
        editableProps={editableProps}
        plugins={plugins}
        initialValue={findReplaceValue}
      />
    </>
  );
}
