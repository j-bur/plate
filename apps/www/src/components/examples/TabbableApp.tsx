import React from 'react';
import { Plate } from '@udecode/plate-common';
import { createListPlugin } from '@udecode/plate-list';
import { createTabbablePlugin } from '@udecode/plate-tabbable';

import { editableProps } from '@/plate/demo/editableProps';
import { plateUI } from '@/plate/demo/plateUI';
import { basicNodesPlugins } from '@/plate/demo/plugins/basicNodesPlugins';
import { tabbablePlugin } from '@/plate/demo/plugins/tabbablePlugin';
import { tabbableValue } from '@/plate/demo/values/tabbableValue';
import { createMyPlugins, MyValue } from '@/plate/plate.types';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createListPlugin(),
    createTabbablePlugin(tabbablePlugin),
  ],
  {
    components: plateUI,
  }
);

export default function TabbableApp() {
  return (
    <>
      <button type="button">Button before editor</button>
      <Plate<MyValue>
        editableProps={editableProps}
        plugins={plugins}
        initialValue={tabbableValue}
      />
      <button type="button">Button after editor</button>
    </>
  );
}
