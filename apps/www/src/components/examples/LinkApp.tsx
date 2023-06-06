import React from 'react';
import { Plate, PlateProvider } from '@udecode/plate-common';
import { createLinkPlugin } from '@udecode/plate-link';

import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { LinkToolbarButton } from '@/components/plate-ui/link-toolbar-button';
import { editableProps } from '@/plate/demo/editableProps';
import { plateUI } from '@/plate/demo/plateUI';
import { basicNodesPlugins } from '@/plate/demo/plugins/basicNodesPlugins';
import { linkPlugin } from '@/plate/demo/plugins/linkPlugin';
import { linkValue } from '@/plate/demo/values/linkValue';
import { createMyPlugins, MyValue } from '@/plate/plate.types';

const plugins = createMyPlugins(
  [...basicNodesPlugins, createLinkPlugin(linkPlugin)],
  {
    components: plateUI,
  }
);

export default function LinkApp() {
  return (
    <PlateProvider<MyValue> plugins={plugins} initialValue={linkValue}>
      <FixedToolbar>
        <LinkToolbarButton />
      </FixedToolbar>

      <Plate<MyValue> editableProps={editableProps} />
    </PlateProvider>
  );
}
