import React from 'react';
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
  createTablePlugin,
  Plate,
  PlateProvider,
} from '@udecode/plate';

import { editableProps } from '@/plate/demo/editableProps';
import { createMyPlugins, MyValue } from '@/plate/demo/plate.types';
import { plateUI } from '@/plate/demo/plateUI';
import { basicNodesPlugins } from '@/plate/demo/plugins/basicNodesPlugins';
import { exitBreakPlugin } from '@/plate/demo/plugins/exitBreakPlugin';
import { softBreakPlugin } from '@/plate/demo/plugins/softBreakPlugin';
import { tableValue } from '@/plate/demo/values/tableValue';
import { TableDropdownMenu } from '@/plate/table/TableDropdownMenu';
import { HeadingToolbar } from '@/plate/toolbar/HeadingToolbar';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createSoftBreakPlugin(softBreakPlugin),
    createExitBreakPlugin(exitBreakPlugin),
    createTablePlugin({
      options: {
        initialTableWidth: 600,
        // disableMarginLeft: true,
      },
    }),
  ],
  {
    components: plateUI,
  }
);

export default function TableApp() {
  return (
    <PlateProvider<MyValue> plugins={plugins} initialValue={tableValue}>
      <HeadingToolbar>
        <TableDropdownMenu />
      </HeadingToolbar>

      <Plate<MyValue> editableProps={editableProps} />
    </PlateProvider>
  );
}
